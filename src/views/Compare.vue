<template>
  <div class="about">
    <Gantt :key="1" :options="compareOptions" :tasks="planA" />
    <Gantt :key="2" :options="compareOptions" :tasks="planB" />
  </div>
</template>
<script>
import Gantt from '../components/Gantt'
import {
  planA,
  planB,
  compareOptions,
  baseTasks,
  options
} from '../config/granttConfig'
export default {
  components: {
    Gantt
  },
  data () {
    return {
      planA,
      planB,
      compareOptions,
      baseTasks,
      options
    }
  },
  created () {
    // let maxLen
    // let roll
    // if (planA.length >= planB.length) {
    //   maxLen = planA.length
    // } else {
    //   maxLen = planB.length
    // }
    const compare = (parentId) => {
      console.log(parentId)
    }
    let maxLen = Math.max(planA.length, planB.length)
    for (let i = 0; i < maxLen; i++) {
      // if (planA[i].parentId || planB[i].parentId) return
      compare(planA[i].id)
      if (planA[i] && planB[i]) {
        let type = ''
        Object.keys(planB[i]).forEach((key) => {
          // console.log(key)
          if (key === 'style') return
          if (planA[i][key] != planB[i][key]) {
            console.log(key)
            type = 'update'
            // continue
            // return
          }
        })
        this.planB[i].styleType = type
        this.planA[i].styleType = type
      } else if (planA[i] && !planB[i]) {
        this.planA[i].styleType = 'add'
      } else if (!planA[i] && planB[i]) {
        this.planB[i].styleType = 'add'
      }
    }
    this.planA = [...this.planA]
    this.planB = [...this.planB]
    console.log(this.planA)
    console.log(this.planB)
    console.log(this.compareOptions)
  }
}
</script>
