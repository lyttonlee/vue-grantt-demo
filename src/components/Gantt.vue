<template>
  <div class="grantt">
    <GanttElastic :tasks="tasks" :options="options" >
      <Header slot="header" :options="headerOpts"></Header>
    </GanttElastic>
  </div>
</template>
<script>
// import GanttElastic from "gantt-elastic";
import GanttElastic from "gantt-elastic-style";
import Header from "gantt-elastic-header";
// import bus from '../bus/bus';
import moment from 'moment'
export default {
  props: {
    tasks: {
      required: true,
      type: Array
    },
    options: {
      type: Object,
      required: true
    },
    headerOpts: {
      default: () => {
        return {
          title: {
            label: '北伐中原，光复汉室大计划'
          },
          locale: {
            Now: moment().format('YYYY-MM-DD'),
            'X-Scale': '横轴缩放',
            'Y-Scale': '竖轴缩放',
            'Before/After': '时间偏移',
            'Task list width': '列表宽度',
            'Display task list': '显示模式'
          }
        }
      }
    }
  },
  components: {
    GanttElastic,
    Header
  }
}
</script>
<style lang="less" scoped>
.grantt {
  min-height: 300px;
}
</style>