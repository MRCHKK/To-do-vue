<template>
  <div id="app">
   <ToDoApp />
    <router-view :key="$route.fullPath"></router-view>

  </div>
</template>

<script>
import ToDoApp from './components/ToDoApp.vue'

export default {
  name: 'App',
  components: {
    ToDoApp
  }
}
</script>
