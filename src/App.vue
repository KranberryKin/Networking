<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div id="disapearOnSm" class="col-2 bg-dark">
        <Sidebar />
      </div>
      <div class="col-10 bg-secondary">
        <header class="row">
          <Navbar />
        </header>
        <main class="row">
          <router-view />
        </main>
        <footer class="row d-flex bg-dark text-light text-center p-4">
          <div class="col-4"></div>
          <div class=" col-4">
            Made with (✿◠‿◠) by KranberryKin
          </div>
          <div class="col-4"></div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
@media only screen and ( max-width: 752px ){
  #disapearOnSm{
    display: none;
  }
}
</style>
