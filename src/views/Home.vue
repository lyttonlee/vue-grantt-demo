<template>
  <div class="page">
    <h2>甘特图基本操作</h2>
    <Gantt :key="1" :tasks="tasks" :options="options" />
    <Modal :task="temTask" :tasks="tasks" @task="getTask" ref="taskModel" />
  </div>
</template>

<script>
// @ is an alias to /src
import {
  options,
  baseTasks,
  taskAttrs
} from '../config/granttConfig'
import Gantt from '../components/Gantt'
import Modal from '../components/Modal'
import bus from '../bus/bus';
import moment from 'moment'
export default {
  name: "Home",
  components: {
    Gantt,
    Modal
  },
  data () {
    return {
      tasks: baseTasks,
      options,
      temTask: null,
      showModal: false
    }
  },
  methods: {
    getTask (task) {
      if (task.id) {
        console.log(task)
        const index = this.tasks.findIndex((t) => t.id === task.id)
        console.log(index)
        if (index > -1) {
          this.tasks[index] = task
          this.tasks = [...this.tasks]
          console.log(this.tasks)
        } 
      } else {
        task.id = this.tasks[this.tasks.length - 1].id + 1
        this.tasks.push(task)
        this.temTask = null
        this.showModal = false
      }
    }
  },
  mounted () {
    bus.$on('editTask', (data) => {
      // console.log(data)
      this.temTask = {}
      Object.keys(taskAttrs).forEach((key) => {
        if (key === 'remove') {
          this.temTask[key] = data[key] ? true : false
        } else if (key === 'duration') {
          this.temTask[key] = moment.duration(data[key], 'ms').asDays()
        } else {
          this.temTask[key] = data[key]
        }
      })
      // console.log(this.temTask)
      this.$refs['taskModel'].setForm(this.temTask)
      this.$refs['taskModel'].visable = true
    }),
    bus.$on('addTask', (data) => {
      console.log(data)
      this.temTask = {
        parentId: data.data.id
      }
      this.$refs['taskModel'].setForm(this.temTask)
      this.$refs['taskModel'].visable = true

    })
    bus.$on('removeTask', (data) => {
      // console.log(data)
      const id = data.data.id
      this.$confirm('是否要删除这一条任务吗?', '请确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // todo
        // 找到该条任务索引，然后删除它
        const index = this.tasks.findIndex((task) => task.id === id)
        index > -1 && this.tasks.splice(index, 1)
      })
    })
  },
  beforeDestroy () {
    bus.$off('removeTask')
    bus.$off('addTask')
    bus.$off('editTask')
  }
};
</script>
