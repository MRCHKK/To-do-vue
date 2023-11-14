<template>
  <div>
    <nav class="navbar navbar-expand-lg justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <router-link to="/calendar" class="nav-link">Calendar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user" class="nav-link">User </router-link>
        </li>
      </ul>
    </nav>
  </div>
  <body>
    <div style="cursor: pointer">
    <span class="fa fa-user-tie-hair"></span>
  </div>
</body>
  </template>


  <script>
  export default {
    name: 'User-Site'
  }
  </script>
  
  <style>
  .User-Site {
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
  
    font-family: 'Lato', sans-serif;
  }
  </style>
  