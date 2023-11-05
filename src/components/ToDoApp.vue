<template>
  <div class="container">

    <h2 class="text-center mt-5">
      Vue Todo App
    </h2>
  
    <div class="input-container">
      <input v-model="task" type="text" placeholder="Enter task">
      <button class = btn btn-warning rounded-0 @click="saveInput">Zapisz</button>
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
      <td>{{task.name }}</td>
      <td>{{ task.status }}</td>
      <td>  
        <div cursor: pointer class="text-center" @click="editTask(index)">
          <span class="fa fa-pen"></span>
        </div>
      </td>
      <td>
        <div cursor: pointer class="text-center" @click="deleteTask(index)">
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
      task:'',
      editedTask: null,
      tasks:[
        {
          name: 'Tylko małpy robią frontend',
          status: 'To-do'
        },
        {
          name: 'Frątasie do spania',
          status: 'to-do'
        }
      ]
    };
  
  },
  methods: {
    saveInput() {
      if (this.task.length === 0) return;
      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: 'To-Do',
        });
      } else {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      this.task = '';
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
  },
};
</script>

<style>

.input-container {
    margin-top: 40px;
    text-align: center;
}
</style>
