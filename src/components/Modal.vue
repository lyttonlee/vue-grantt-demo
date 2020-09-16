<template>
  <div class="modal">
    <el-dialog :visible="visable" title="编辑添加任务" destroy-on-close >
      <el-form :model="form" :rules="rules" ref="taskForm">
        <el-form-item label="任务内容" prop="label" :label-width="formLabelWidth">
          <el-input size="small" v-model="form.label" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="负责人" prop="user" :label-width="formLabelWidth">
          <el-select size="small" v-model="form.user" placeholder="请选择负责人">
            <template v-for="(user, index) in users">
              <el-option :key="index" :label="user.name" :value="user.name" ></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间" prop="start" :label-width="formLabelWidth">
          <el-date-picker
            size="small"
            v-model="form.start"
            type="date"
            placeholder="选择开始时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="任务周期" prop="duration" :label-width="formLabelWidth">
          <el-input style="width: 220px" size="small" v-model="form.duration" autocomplete="off">
            <span slot="suffix">天</span>
          </el-input>
        </el-form-item>
        <el-form-item label="任务进度" :label-width="formLabelWidth">
          <el-input style="width: 220px" size="small" v-model="form.progress" autocomplete="off">
            <span slot="suffix">%</span>
          </el-input>
        </el-form-item>
        <el-form-item label="可删除" :label-width="formLabelWidth">
          <el-switch
            v-model="form.remove"
            active-color="#13ce66"
            inactive-color="#666">
          </el-switch>
        </el-form-item>
        <el-form-item label="父级节点" :label-width="formLabelWidth">
          <el-select size="small" clearable v-model="form.parentId" placeholder="请选择父节点">
            <template v-for="(task, index) in tasks">
              <el-option :key="index" :label="task.label" :value="task.id" ></el-option>
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="依赖任务" :label-width="formLabelWidth">
          <el-select size="small" clearable multiple v-model="form.dependentOn" placeholder="选择前置依赖任务(可多选)">
            <template v-for="(task, index) in tasks">
              <el-option :key="index" :label="task.label" :value="task.id" ></el-option>
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="quit">取 消</el-button>
        <el-button size="small" type="primary" @click="emitTask">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  users
} from '../data/mock'
export default {
  props: ['task', 'tasks'],
  data () {
    return {
      visable: false,
      form: {
        label: '',
        user: '',
        start: '',
        duration: '',
        progress: 0,
        type: '',
        remove: true,
        dependentOn: [],
        parentId: ''
      },
      rules: {
        label: [
          { required: true, message: '丞相大人您得给个指示啊',  trigger: 'blur'}
        ],
        user: [
          { required: true, message: '丞相大人您觉得这活给谁干合适啊',  trigger: 'blur'}
        ],
        start: [
          { required: true, message: '丞相大人您得说说这活啥时候干啊',  trigger: 'blur'}
        ],
        duration: [
          { required: true, message: '丞相大人您预计这活得干多久啊',  trigger: 'blur'}
        ]
      },
      formLabelWidth: '120px',
      users,
    }
  },
  methods: {
    initForm () {
      this.form = {
        label: '',
        user: '',
        start: '',
        duration: '',
        progress: 0,
        type: '',
        remove: true,
        dependentOn: [],
        parentId: ''
      }
    },
    setForm (task) {
      this.form = Object.assign({}, this.form, task)
    },
    emitTask () {
      console.log('emit')
      this.$refs['taskForm'].validate((valid) => {
        if (valid) {
          this.form.duration = this.form.duration * 24 * 60 * 60 * 1000
          if (this.form.dependentOn.length === 0) {
            delete this.form.dependentOn
          }
          if (this.form.parentId === '') {
            delete this.form.parentId
          }
          this.form.add = `<button>添加</button>`
          if (this.form.remove) {
            this.form.remove = `<button>删除</button>`
          } else {
            this.form.remove = ``
          }
          this.form.type = this.form.type ? this.form.type :'task'
          this.form.style = {
            base: {
              fill: '#1EBC61',
              stroke: '#0EAC51'
            },
          }
          console.log(this.form)
          const task = this.form
          this.$emit('task', task)
          this.initForm()
          this.visable = false
        }
      })
    },
    quit () {
      this.initForm()
      this.visable = false
    }
  },
  created () {
    this.form = Object.assign({}, this.form, this.task)
  }
}
</script>
<style lang="less" scoped>

</style>