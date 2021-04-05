<template>
  <div class="container-fluid">
    <div id="nav" class="sidenav">
      <div class="row">
        <router-link :to="{ name: 'Home' }" class="btn btn-lg m-auto"
          >Home</router-link
        >
      </div>
      <div class="row mt-5">
        <router-link :to="{ name: 'Search' }" class="btn btn-lg m-auto"
          >Search</router-link
        >
      </div>
    </div>
    <router-view class="main" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* The sidenav */
.sidenav {
  height: 100%;
  width: 15%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 5%;
}

/* Page content */
.main {
  margin-left: 15%; /* Same as the width of the sidenav */
}
</style>
