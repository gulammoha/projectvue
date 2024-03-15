<template>
  <div class="signup-form">
    <h1>Sign Up</h1>
    <form @submit.prevent="submitForm">
      <label>Email:</label>
      <input type="email" v-model="email" required>

      <label>Username:</label>
      <input type="text" v-model="username" required>

      <label>Password:</label>
      <input type="password" v-model="password" required>

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      username: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      console.log('Email:', this.email);
      console.log('Username:', this.username);
      console.log('Password:', this.password);

      // Example POST request using axios
      axios
        .post('/api/signup', {
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then(response => {
          // Handle success response
          console.log(response.data);
        })
        .catch(error => {
          // Handle error response
          console.error(error);
        });
    }
  }
};
</script>
<style scoped>
.signup-form {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  margin-bottom: 10px;
  padding: 5px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
}
</style>