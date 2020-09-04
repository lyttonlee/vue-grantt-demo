import moment from 'moment'
import dayjs from 'dayjs'
import bus from '../bus/bus'
export const options = {
  maxRows: 100,
  maxHeight: 800,
  title: {
    label: 'Your project title as html (link or whatever...)',
    html: false
  },
  row: {
    height: 24
  },
  calendar: {
    hour: {
      display: false
    },
  },
  chart: {
    progress: {
      bar: false
    },
    expander: {
      display: true
    }
  },
  taskList: {
    expander: {
      straight: false
    },
    columns: [
      {
        id: 1,
        label: '序号',
        value: 'id',
        width: 40,
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center',
            width: '100%'
          }
        }
      },
      {
        id: 2,
        label: '任务内容',
        value: 'label',
        width: 200,
        expander: true,
        // html: true,
        events: {
          click({ data }) {
            bus.$emit('editTask', data)
          }
        },
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center',
            width: '100%',
            cursor: 'pointer'
          }
        }
      },
      {
        id: 3,
        label: '责任人',
        value: 'user',
        width: 100,
        html: true,
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center',
            width: '100%'
          }
        }
      },
      {
        id: 3,
        label: '开始时间',
        value: task => dayjs(task.start).format('YYYY-MM-DD'),
        width: 100,
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center',
            width: '100%'
          }
        }
      },
      {
        id: 4,
        label: '周期',
        value: task => moment.duration(task.duration, 'ms').asDays() + '天',
        width: 68,
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center',
            width: '100%'
          }
        }
      },
      {
        id: 5,
        label: '进度',
        value: 'progress',
        width: 50,
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center',
            width: '100%'
          }
        }
      },
      {
        id: 6,
        width: 50,
        label: '添加',
        value: 'add',
        html: true,
        events: {
          click: (data) => {
            bus.$emit('addTask', data)
          }
        },
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center',
            width: '100%'
          }
        }
      },
      {
        id: 6,
        width: 50,
        label: '删除',
        value: 'remove',
        html: true,
        events: {
          click: (data) => {
            bus.$emit('removeTask', data)
          }
        },
        style: {
          'task-list-header-label': {
            'text-align': 'center',
            width: '100%'
          },
          'task-list-item-value-container': {
            'text-align': 'center',
            width: '100%'
          }
        }
      }
    ]
  },
  locale: {
    weekdays:["周日","周一","周二","周三","周四","周五","周六"],
    months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
  }
}

export const baseTasks = [
  {
    id: 1,label: '北伐中原，光复汉室',
    user:
      '诸葛丞相',
    start: new Date().setHours(0),
    duration: 90 * 24 * 60 * 60 * 1000,
    progress: 5,
    type: 'project',
    style: {
      base: {
        fill: '#1EBC61',
        stroke: '#0EAC51'
      },
    },
    //collapsed: true,
    add: `<button>添加</button>`,
    // remove: `<button>删除</button>`,
  },
]

export const taskAttrs = {
  id: '',
  label: '',
  user: '',
  start: '',
  duration: '',
  progress: 0,
  type: '',
  remove: false,
  dependentOn: [],
  parentId: ''
}