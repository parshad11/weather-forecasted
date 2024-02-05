<template>
    <form class="signup-form" @submit.prevent="signUp">
      <h2>Sign up</h2>
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-success">Sign Up</button>
    </form>
  </template>
  
  <script>
  import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
  import { auth } from '../firebase/init.js'
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      signUp() {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: this.username
            })
              .then(() => {
                this.$emit('signuped')
              })
          })
      }
    }
  }
  </script>
  
  <style scoped>
  .signup-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  </style>
  