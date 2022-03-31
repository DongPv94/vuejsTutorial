<template>
  <div class="my-header">
    <button class="home-button" type="button"></button>
    <button class="my-navbutton" type="button"></button>
  </div>

  <div>
    <router-view />
  </div>
</template>

<script>
</script>

<style>
.my-navbutton {
  border-radius: unset;
  background-color: inherit;
  color: inherit;
  height: unset !important;

  margin: unset;
}

.home-button {
  background: url("./assets/Logo_VN_Chuan.png");
  background-repeat: no-repeat;
  background-size: 150px;
  background-position: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 219px;
  height: 100%;
  border-radius: unset;
  margin-right: 0px;
  margin-top: 0px;
  margin-left: 0px;
}

.my-header {
  text-transform: uppercase;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: white;
  color: black;
  width: 100%;
  height: 68px;
  margin-top: 0px;
}

.my-header > :first-child {
  margin-left: var(--lumo-space-m);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
