<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
         <img alt="Vue logo" width="40" src="../assets/logo.png">
        <span class="fs-4 ms-2">Moviez</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link" @click="logout">Logout</a></li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
    logout(){
      localStorage.removeItem('userSession')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>

</style>