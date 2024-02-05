<template>
    <form class="login-form" @submit.prevent="login">
      <h2>Log in</h2>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Email" required v-model="email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" required v-model="password">
      </div>
      <button type="submit" class="btn btn-primary">Log in</button>
    </form>
  </template>
  
  <script>
  import { signInWithEmailAndPassword } from 'firebase/auth'
  import { auth } from '../firebase/init.js'
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((credentials) => {
            this.$store.dispatch('setUser', credentials.user);
          })
      }
    }
  }
  </script>
  
  <style scoped>
  .login-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  </style>
  