<template>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
        {{ getUsername }}
        </button>
      <ul class="dropdown-menu" aria-labelledby="userDropdown">
        <li><a class="dropdown-item" href="#" @click="signOut">Sign Out</a></li>
      </ul>
    </div>
  </template>
  
<script>
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/init.js'
export default {
    name: 'UserDropdown',
    computed: {
        getLoginUser() {
            return this.$store.getters.getUser;
        },
        getUsername() {
            return this.$store.getters.getUser.displayName;
        }
    },
    methods: {
        signOut() {
            signOut(auth)
                .then(() => {
                    this.$store.dispatch('setUser', {});
                })
        }
    },
};
</script>
  