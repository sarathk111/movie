<template>
  <div class="row login">
    <form @submit.stop.prevent="login" class="col">
      <div>
        <input type="text" v-model="username" placeholder="Username" class="form-control">
         <transition name="fadeIn">
         <p class="error-block mt-2" v-if="invalidUser">Invalid Username</p>
         </transition>
      </div>
      <button type="submit" class="btn btn-primary mt-2">Login</button>
     
    </form>
  </div>
</template>

<script>
export default {
  name: 'login-form',
  props: {
    msg: String
  },
  data(){
    return {
      users: null,
      username:null,
      invalidUser: false
    }
  },
  methods: {
    login() {
      fetch(`${process.env.VUE_APP_LOGIN_URL}/users`)
        .then(response => response.json())
        .then(data => {
          this.users = data
          this.isUserExist(data)

        });
    },
    isUserExist(userlist) {
      const finduser = userlist.find((ele)=>{
        return ele.username === this.username
      })
      if(finduser){
         this.invalidUser = false
        this.createUsersession(finduser)
      }
      else {
        this.invalidUser = true
      }
    },
    createUsersession(user){

    localStorage.setItem("userSession", JSON.stringify(user));
    this.$router.push({ name: 'Movies',params: {name: user.name} })
    }
  }
}
</script>
<style scoped>
.error-block {
  color:crimson;
  font-size: 12px;
};
</style>
