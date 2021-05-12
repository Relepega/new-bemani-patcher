<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}

body {
	margin: 40px auto;
	max-width: 1300px;
	line-height: 1.6;
	font-size: 18px;
	color: rgb(182, 182, 182);
	padding: 0 10px;
	background: #141414;
	font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
}

h1,
h2,
h3 {
	line-height: 1.2;
}

h4,
h5 {
	line-height: 1;
	margin: 10px auto;
}

h1 {
	text-align: center;
}

h1 a {
	color: inherit;
	text-decoration: inherit;
}
</style>
