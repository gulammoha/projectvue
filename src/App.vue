<script setup>
    import { ref } from 'vue';

      const count = ref(0)
      function Increment(){
        count.value++
      }
</script>
<template>
  <div class="container">
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/contact">Login</RouterLink>
  <RouterLink to="/signup">Sign Up</RouterLink>
</div>
<RouterView></RouterView>

</template>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
  text-decoration: underline;
  color:azure;
  padding: 20px;
  
  padding-right: 10px;
  padding-left: 20px;
  background-color: rgb(248, 7, 7);
}

</style>
