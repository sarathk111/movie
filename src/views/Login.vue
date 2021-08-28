<template>
  <div class="home">
    <img alt="Vue logo"  width="50" src="../assets/logo.png"> <h1>Moviez</h1>
    <login-form/>
  </div>
  <div class="banner"></div>
  <div class="overlay"></div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>
<style scoped>
.banner {
  background:url('../assets/banner.jpg');
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  cursor: pointer;
}

h1{
  font-size: 20px;
}
.home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 15px;
  border: 5px solid #007ac3;
  z-index: 5;
  width: 300px;
}
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.753);
  z-index: 2;
  cursor: pointer;
}
</style>
