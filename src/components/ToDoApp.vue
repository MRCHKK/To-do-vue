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
          <router-link to="/user" class="nav-link">User</router-link>
        </li>
      </ul>
    </nav>
  </div>

  <div class="container table-container">
    <h2 class="text-center mt-5">Vue Todo App</h2>

    <div class="input-container">
      <input v-model="task" type="text" placeholder="Enter task" @keydown.enter="saveInput" />
      <button class="btn btn-warning rounded-3 mb-1" @click="saveInput">Zapisz</button>
    </div>
    <table class="table table-bordered mt-3 table-fixed">
      <thead class="ml-300">
        <tr>
          <th scope="col">Task</th>
      <th scope="col" width="150px">Status</th>
      <th scope="col" class="text-center" width="70px" >Edit</th>
      <th scope="col" class="text-center" width="70px" >Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td :class="{taskdone: task.status === 2}">{{ task.name }}</td>
          <td @click="changeStatus(index)" style="cursor: pointer">{{ statuses[task.status] }}</td>
          <td>
            <div style="cursor: pointer" @click="editTask(index)">
              <span class="fa fa-pen"></span>
            </div>
          </td>
          <td>
            <div style="cursor: pointer" @click="deleteTask(index)">
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
      tasks: JSON.parse(localStorage.getItem('tasks')) || [
        {
        },
      ],
    };
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
          status: 0,
        });
        this.saveToLocalStorage();
      } else {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
        this.saveToLocalStorage();
      }
      this.task = '';
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveToLocalStorage();
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    changeStatus(index) {
      this.tasks[index].status =
        this.tasks[index].status + 1 < this.statuses.length
          ? this.tasks[index].status + 1
          : 0;
      this.saveToLocalStorage();
    },
  },
};
</script>

<style>
table {
  border-collapse: collapse;
    width: 100%;

}
  .taskdone 
  {
    text-decoration: line-through;
    text-decoration-color: red;
    font-weight: bold;
  }
th,
td {
  border: 2px solid black;
  padding: 10px;
  text-align: center;
}
.input-container {
  margin-top: 40px;
  text-align: center;
}
.table-container {
    width: 100%;
    overflow-x: auto;
  }

  .table-fixed {
    border-top: 2px solid #000; 
    border-bottom: 2px solid #000;
    table-layout: fixed;
    width: 100%;
  }

  .table-fixed td {
    border-top: 1px solid #000; 
    border-bottom: 1px solid #000;
    word-wrap: break-word; 
  }
</style>
