// import { saveAs } from 'file-saver'
const { saveAs } = require('file-saver')

//helpers
function createDiv({ classnames = [], id = '', innertext = '' }) {
	let div = document.createElement('div')
	classnames.forEach((classname) => {
		div.classList.add(classname)
	})
	div.id = id
	div.innerHTML = innertext
	// parent.appendChild(div)

	return div
}

function createLabel({ classnames = [], id = '', innertext = '', attributes = [] }) {
	let label = document.createElement('label')
	classnames.forEach((classname) => {
		label.classList.add(classname)
	})
	label.id = id
	label.innerHTML = innertext

	attributes.forEach(({ name, value }) => {
		label.setAttribute(name, value)
	})

	return label
}

function createButton({ classnames = [], id = '', innertext }) {
	let button = document.createElement('button')
	classnames.forEach((classname) => {
		button.classList.add(classname)
	})
	button.id = id
	button.innerText = innertext

	return button
}

function createInput({ classnames = [], id = '', innertext = '', type = 'checkbox', name = '' }) {
	let input = document.createElement('button')
	classnames.forEach((classname) => {
		input.classList.add(classname)
	})
	input.id = id
	input.innerHTML = innertext
	input.type = type
	input.name = name

	return input
}

function createGenericElement({ elname = 'div', classnames = [], id = '', innertext = '', attributes = [] }) {
	let element = document.createElement(elname)

	classnames.forEach((classname) => {
		element.classList.add(classname)
	})

	element.id = id
	element.innerHTML = innertext

	attributes.forEach(({ key, value }) => {
		element.setAttribute(key, value)
	})

	return element
}

function hideElement(node) {
	node.style.display = 'none'
}

window.Patcher_uniqueid = 0

function createID() {
	window.Patcher_uniqueid++
	return 'dllpatch_' + window.Patcher_uniqueid
}

function bytesMatch(buffer, offset, bytes) {
	for (let i = 0; i < bytes.length; i++) {
		if (buffer[offset + i] != bytes[i]) return false
	}
	return true
}

function replace(buffer, offset, bytes) {
	for (let i = 0; i < bytes.length; i++) {
		buffer[offset + i] = bytes[i]
	}
}

/* eslint-disable-next-line */
function whichBytesMatch(buffer, offset, bytesArray) {
	for (let i = 0; i < bytesArray.length; i++) {
		if (bytesMatch(buffer, offset, bytesArray[i])) return i
	}
	return -1
}

// Each unique kind of patch should have createUI, validatePatch, applyPatch,
// updateUI
class StandardPatch {
	constructor(options) {
		this.name = options.name
		this.patches = options.patches
		this.tooltip = options.tooltip
	}

	createUI(parent) {
		let id = createID()
		let label = this.name
		let patch = createGenericElement({
			elname: 'div',
			classnames: ['patch'],
		})
		this.checkbox = createInput({ id })
		patch.append(this.checkbox)
		patch.append('<label for="' + id + '">' + label + '</label>')
		if (this.tooltip) {
			patch.append('<div class="tooltip">' + this.tooltip + '</div>')
		}
		parent.append(patch)
	}

	updateUI(file) {
		this.checkbox.checked = this.checkPatchBytes(file) === 'on'
	}

	validatePatch(file) {
		let status = this.checkPatchBytes(file)
		if (status === 'on') {
			console.log('"' + this.name + '"', 'is enabled!')
		} else if (status === 'off') {
			console.log('"' + this.name + '"', 'is disabled!')
		} else {
			return '"' + this.name + '" is neither on nor off! Have you got the right file?'
		}
	}

	applyPatch(file) {
		this.replaceAll(file, this.checkbox.checked)
	}

	replaceAll(file, featureOn) {
		for (let i = 0; i < this.patches.length; i++) {
			replace(file, this.patches[i].offset, featureOn ? this.patches[i].on : this.patches[i].off)
		}
	}

	checkPatchBytes(file) {
		let patchStatus = ''
		for (let i = 0; i < this.patches.length; i++) {
			let patch = this.patches[i]
			if (bytesMatch(file, patch.offset, patch.off)) {
				if (patchStatus === '') {
					patchStatus = 'off'
				} else if (patchStatus != 'off') {
					return 'on/off mismatch within patch'
				}
			} else if (bytesMatch(file, patch.offset, patch.on)) {
				if (patchStatus === '') {
					patchStatus = 'on'
				} else if (patchStatus != 'on') {
					return 'on/off mismatch within patch'
				}
			} else {
				return 'patch neither on nor off'
			}
		}
		return patchStatus
	}
}

// Each unique kind of patch should have createUI, validatePatch, applyPatch,
// updateUI

// The DEFAULT state is always the 1st element in the patches array
class UnionPatch {
	constructor(options) {
		this.name = options.name
		this.offset = options.offset
		this.patches = options.patches
	}

	createUI(parent) {
		this.radios = []
		let radio_id = createID()

		let container = createGenericElement({ classnames: ['patch-union'] })
		container.append('<span class="patch-union-title">' + this.name + ':</span>')

		for (let i = 0; i < this.patches.length; i++) {
			let patch = this.patches[i]
			let id = createID()
			let label = patch.name
			let patchDiv = createGenericElement({ classnames: ['patch'] })
			// let radio = $('<input type="radio" id="' + id + '" name="' + radio_id + '">')[0]
			let radio = createInput({
				type: 'radio',
				id,
				name: radio_id,
			})
			this.radios.push(radio)

			patchDiv.append(radio)
			patchDiv.append('<label for="' + id + '">' + label + '</label>')
			if (patch.tooltip) {
				patchDiv.append('<div class="tooltip">' + patch.tooltip + '</div>')
			}
			container.append(patchDiv)
		}
		parent.append(container)
	}

	updateUI(file) {
		for (let i = 0; i < this.patches.length; i++) {
			if (bytesMatch(file, this.offset, this.patches[i].patch)) {
				this.radios[i].checked = true
				return
			}
		}
		// Default fallback
		this.radios[0].checked = true
	}

	validatePatch(file) {
		for (let i = 0; i < this.patches.length; i++) {
			if (bytesMatch(file, this.offset, this.patches[i].patch)) {
				console.log(this.name, 'has', this.patches[i].name, 'enabled')
				return
			}
		}
		return '"' + this.name + '" doesn\'t have a valid patch! Have you got the right file?'
	}

	applyPatch(file) {
		let patch = this.getSelected()
		replace(file, this.offset, patch.patch)
	}

	getSelected() {
		for (let i = 0; i < this.patches.length; i++) {
			if (this.radios[i].checked) {
				return this.patches[i]
			}
		}
		return null
	}
}

function getType(obj) {
	return Object.prototype.toString
		.call(obj)
		.replace(/^\[object (.+)\]$/, '$1')
		.toLowerCase()
}

function loadPatch(_this, self, patcher) {
	patcher.loadPatchUI()
	patcher.updatePatchUI()
	patcher.container.show()
	let successStr = patcher.filename
	if (getType(_this.description) === 'string') {
		successStr += '(' + patcher.description + ')'
	}
	self.successDiv.html(successStr + ' loaded successfully!')
}

class PatchContainer {
	constructor(patchers) {
		this.patchers = patchers
		this.createUI()
	}

	getSupportedDLLs() {
		let dlls = []
		for (let i = 0; i < this.patchers.length; i++) {
			let name = this.patchers[i].filename
			if (dlls.indexOf(name) === -1) {
				dlls.push(name)
			}
		}
		return dlls
	}

	createUI() {
		let self = this
		let container = createDiv({ classnames: ['patchContainer'] })
		let header = this.getSupportedDLLs().join(', ')
		container.innerHTML = '<h3>' + header + '</h3>'

		let supportedDlls = document.createElement('ul')

		this.forceLoadTexts = []
		this.forceLoadButtons = []
		this.matchSuccessText = []

		for (let i = 0; i < this.patchers.length; i++) {
			let checkboxId = createID()
			let listItem = document.createElement('li')
			listItem.appendChild(
				createLabel({
					classnames: ['patchPreviewLabel'],
					id: '',
					innertext: this.patchers[i].description,
					attributes: [
						{
							name: 'for',
							value: checkboxId,
						},
					],
				})
			)

			let matchPercent = createGenericElement({ elname: 'span', classnames: ['matchPercent'] })
			this.forceLoadTexts.push(matchPercent)
			listItem.appendChild(matchPercent)

			let matchSuccess = createGenericElement({ elname: 'span', classnames: ['matchSuccess'] })
			this.matchSuccessText.push(matchSuccess)
			listItem.appendChild(matchSuccess)

			let forceButton = createButton({
				classnames: [],
				id: '',
				innerText: 'Force load?',
			})
			hideElement(forceButton)

			this.forceLoadButtons.push(forceButton)
			listItem.appendChild(forceButton)

			listItem.appendChild(
				createInput({
					classnames: ['patchPreviewToggle'],
					id: checkboxId,
					type: 'checkbox',
				})
			)

			let patchPreviews = createGenericElement({
				elname: 'ul',
				classnames: ['patchPreview'],
			})

			for (let j = 0; j < this.patchers[i].mods.length; j++) {
				let patchName = this.patchers[i].mods[j].name

				patchPreviews.append(
					createGenericElement({
						elname: 'li',
						innertext: patchName,
					})
				)
			}

			listItem.append(patchPreviews)
			supportedDlls.append(listItem)
		}

		let html = document.querySelector('html')

		html.addEventListener('dragover dragenter', () => {
			container.classList.add('dragover')
			return true
		})
		html.addEventListener('dragleave dragend drop', () => {
			container.classList.remove('dragover')
			return true
		})
		html.addEventListener('dragover dragenter', (e) => {
			e.preventDefault()
			e.stopPropagation()
		})

		container.addEventListener('drop', function(e) {
			let files = e.originalEvent.dataTransfer.files
			if (files && files.length > 0) self.loadFile(files[0])
		})

		let filepickerId = createID()

		this.fileInput = createInput({
			classnames: ['fileInput'],
			id: filepickerId,
			type: 'file',
		})

		let label = createGenericElement({
			elname: 'label',
			classnames: ['fileLabel'],
			innertext: '<strong>Choose a file</strong> or drag and drop.',
			attributes: [
				{
					key: 'for',
					value: 'dllpatch_2',
				},
			],
		})

		this.fileInput.addEventListener('change', () => {
			if (this.files && this.files.length > 0) this.loadFile(this.files[0])
		})

		this.successDiv = createGenericElement({ elname: 'div', classnames: ['success'] })
		this.errorDiv = createGenericElement({ elname: 'div', classnames: ['error'] })

		container.append(this.fileInput)
		container.append(label)

		container.append(
			createGenericElement({
				elname: 'h4',
				innertext: 'Supported Versions:',
			})
		)

		container.append(
			createGenericElement({
				elname: 'h5',
				innertext: 'Click name to preview patches',
			})
		)

		container.append(supportedDlls)
		container.append(this.successDiv)
		container.append(this.errorDiv)

		document.querySelector('body').append(container)
	}

	loadFile(file) {
		let reader = new FileReader()
		let self = this

		reader.onload = function(e) {
			let found = false
			// clear logs
			self.errorDiv.empty()
			self.successDiv.empty()
			for (let i = 0; i < self.patchers.length; i++) {
				// reset text and buttons
				self.forceLoadButtons[i].hide()
				self.forceLoadTexts[i].text('')
				self.matchSuccessText[i].text('')
				let patcher = self.patchers[i]
				// remove the previous UI to clear the page
				patcher.destroyUI()
				// patcher UI elements have to exist to load the file
				patcher.createUI()
				patcher.container.hide()
				patcher.loadBuffer(e.target.result)
				if (patcher.validatePatches()) {
					found = true
					loadPatch(this, self, patcher)
					// show patches matched for 100% - helps identify which version is loaded
					let valid = patcher.validPatches
					self.matchSuccessText[i].text(' ' + valid + ' of ' + valid + ' patches matched (100%) ')
				}
			}

			if (!found) {
				// let the user force a match
				for (let i = 0; i < self.patchers.length; i++) {
					let patcher = self.patchers[i]

					let valid = patcher.validPatches
					let percent = ((valid / patcher.totalPatches) * 100).toFixed(1)

					self.forceLoadTexts[i].text(' ' + valid + ' of ' + patcher.totalPatches + ' patches matched (' + percent + '%) ')
					self.forceLoadButtons[i].show()
					self.forceLoadButtons[i].off('click')
					self.forceLoadButtons[i].click(
						function(i) {
							// reset old text
							for (let j = 0; j < self.patchers.length; j++) {
								self.forceLoadButtons[j].hide()
								self.forceLoadTexts[j].text('')
							}

							loadPatch(this, self, self.patchers[i])
						}.bind(this, i)
					)
				}
				self.errorDiv.html('No patch set was a 100% match.')
			}
		}

		reader.readAsArrayBuffer(file)
	}
}

class Patcher {
	constructor(fname, description, args) {
		this.mods = []
		for (let i = 0; i < args.length; i++) {
			let mod = args[i]
			if (mod.type) {
				if (mod.type === 'union') {
					this.mods.push(new UnionPatch(mod))
				}
			} else {
				// standard patch
				this.mods.push(new StandardPatch(mod))
			}
		}

		this.filename = fname
		this.description = description
		this.multiPatcher = true

		if (!this.description) {
			// old style patcher, use the old method to generate the UI
			this.multiPatcher = false
			this.createUI()
			this.loadPatchUI()
		}
	}

	createUI() {
		var self = this
		this.container = createGenericElement({ classnames: ['patchContainer'] })
		var header = this.filename
		if (this.description === 'string') {
			header += ' (' + this.description + ')'
		}
		this.container.html('<h3>' + header + '</h3>')

		this.successDiv = createGenericElement({ classnames: ['success'] })
		this.errorDiv = createGenericElement({ classnames: ['error'] })
		this.patchDiv = createGenericElement({ classnames: ['patches'] })

		let saveButton = createGenericElement({
			elname: 'button',
			innertext: 'Load file First',
			attributes: [{ key: 'disabled', value: 'disabled' }],
		})
		saveButton.addEventListener('click', this.saveDll.bind(this))
		this.saveButton = saveButton

		if (!this.multiPatcher) {
			// $('html')
			// 	.on('dragover dragenter', function() {
			// 		self.container.addClass('dragover')
			// 		return true
			// 	})
			// 	.on('dragleave dragend drop', function() {
			// 		self.container.removeClass('dragover')
			// 		return true
			// 	})
			// 	.on('dragover dragenter dragleave dragend drop', function(e) {
			// 		e.preventDefault()
			// 	})
			let html = document.querySelector('html')
			html.addEventListener('dragover dragenter', function() {
				self.container.addClass('dragover')
				return true
			})
			html.addEventListener('dragleave dragend drop', function() {
				self.container.removeClass('dragover')
				return true
			})
			html.addEventListener('dragover dragenter dragleave dragend drop', function(e) {
				e.preventDefault()
			})

			this.container.on('drop', function(e) {
				let files = e.originalEvent.dataTransfer.files
				if (files && files.length > 0) self.loadFile(files[0])
			})

			let filepickerId = createID()
			this.fileInput = createInput({
				id: filepickerId,
				classnames: ['fileInput'],
				type: 'file',
			}) // $('<input>', { class: 'fileInput', id: filepickerId, type: 'file' })
			let label = createLabel({
				classnames: ['fileLabel'],
				attributes: [
					{
						key: 'for',
						value: 'filepickerId',
					},
				],
				innertext: '<strong>Choose a file</strong> or drag and drop.',
			}) //$('<label>', { class: 'fileLabel', for: filepickerId })
			// label.html('<strong>Choose a file</strong> or drag and drop.')

			this.fileInput.on('change', function() {
				if (this.files && this.files.length > 0) self.loadFile(this.files[0])
			})

			this.container.appendChild(this.fileInput)
			this.container.appendChild(label)
		}

		this.container.appendChild(this.successDiv)
		this.container.appendChild(this.errorDiv)
		this.container.appendChild(this.patchDiv)
		this.container.appendChild(saveButton)
		document.querySelector('body').appendChild(this.container)
	}

	destroyUI() {
		/* eslint-disable-next-line */
		if (this.hasOwnProperty('container')) this.container.remove()
	}

	loadBuffer(buffer) {
		this.dllFile = new Uint8Array(buffer)
		if (this.validatePatches()) {
			this.successDiv.removeClass('hidden')
			this.successDiv.html('File loaded successfully!')
		} else {
			this.successDiv.addClass('hidden')
		}
		// Update save button regardless
		this.saveButton.prop('disabled', false)
		this.saveButton.text('Save Patched File')
		this.errorDiv.html(this.errorLog)
	}

	loadFile(file) {
		var reader = new FileReader()
		var self = this

		reader.onload = function(e) {
			self.loadBuffer(e.target.result)
			self.updatePatchUI()
		}

		reader.readAsArrayBuffer(file)
	}

	saveDll() {
		if (!this.dllFile || !this.mods || !this.filename) return

		for (var i = 0; i < this.mods.length; i++) {
			this.mods[i].applyPatch(this.dllFile)
		}

		var blob = new Blob([this.dllFile], { type: 'application/octet-stream' })
		saveAs(blob, this.filename)
	}

	loadPatchUI() {
		for (var i = 0; i < this.mods.length; i++) {
			this.mods[i].createUI(this.patchDiv)
		}
	}

	updatePatchUI() {
		for (var i = 0; i < this.mods.length; i++) {
			this.mods[i].updateUI(this.dllFile)
		}
	}

	validatePatches() {
		this.errorLog = ''
		var success = true
		this.validPatches = 0
		this.totalPatches = this.mods.length
		for (var i = 0; i < this.mods.length; i++) {
			var error = this.mods[i].validatePatch(this.dllFile)
			if (error) {
				this.errorLog += error + '<br/>'
				success = false
			} else {
				this.validPatches++
			}
		}
		return success
	}
}

window.Patcher = Patcher
window.PatchContainer = PatchContainer

module.exports = { StandardPatch, UnionPatch, PatchContainer, Patcher }
