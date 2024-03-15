<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input type="text" v-model="username" id="username" placeholder="Enter your username" required>
      <label for="password">Password</label>
      <input type="password" v-model="password" id="password" placeholder="Enter your password" required>
      <button type="submit">Login</button>
      <router-link to="/signup">Don't have an account? Sign up</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // You can perform login actions here
      // For now, let's just log the entered credentials
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    }
  }
}
</script>

<style>
.login-form {
  width: 300px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  margin-top: 0;
}

label {
  display: block;
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}
</style>