
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
      <a class="nav-link" href="/">User</a>
    </li>
  </ul>
</nav>
  </div>

  <div class="container">

    <h2 class="text-center mt-5">
      Vue Todo App
    </h2>

    <div class="input-container" style="display: center; align-items: center;">
      <input v-model="task" type="text" placeholder="Enter task" @keydown.enter="saveInput">
      <button class="btn btn-warning rounded-3 mb-1" @click="saveInput" >Zapisz</button>
    </div>
    <table class="table table-bordered mt-3">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
      <th scope="col" class="text-center">Edit</th>
      <th scope="col" class="text-center">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task, index) in tasks" :key="index">
      <td v-text="task.name"></td>
      <td @click="changeStatus(index)" style="cursor:pointer;" v-text="task.status" >
      
      </td>
      <td>
        <div style="cursor:pointer;" class="text-center siema" @click="editTask(index)">
          <span class="fa fa-pen"></span>
        </div>
      </td>
      <td>
        <div style="cursor:pointer;" class="text-center" @click="deleteTask(index)">
          <span class="fa fa-trash"></span>
        </div>
      </td>
    </tr>
  </tbody>
</table>


  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      task: '',
      editedTask: null,
      statuses: ['To-Do', 'In-Progress', 'Completed'],
      currentStatusIndex: 0,
      tasks: JSON.parse(localStorage.getItem('tasks')) ?? [
        {
          name: 'Tylko małpy robią frontend',
          status: 'To-do',
        },
      ],
    };
  },
  computed:{
    currentStatus(){

      return this.statuses[this.currentStatusIndex];
    },
  },
  methods: {
    saveToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    saveInput() {
      if (!this.task.length) return;
      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: this.currentStatus,
        });
        this.saveToLocalStorage();
        return;
      }
      this.saveToLocalStorage();
      this.tasks[this.editedTask].name = this.task;
      this.editedTask = null;
      this.task = '';
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveToLocalStorage();
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
      this.saveToLocalStorage();
    },
    changeStatus(index) {
      this.tasks[index].status = this.statuses[(this.statuses.indexOf(this.tasks[index].status) + 1) % this.statuses.length];
      this.saveToLocalStorage();
    },
    setStatus(task) {
    return this.statuses.indexOf(task.status);
  },
  },
};
</script>

<style>
.siema {
  color: black !important;
}
.input-container {
  margin-top: 40px;
  text-align: center;
}
</style>