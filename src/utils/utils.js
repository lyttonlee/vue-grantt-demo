
// 基本的任务样式
const baseStyle = {
    'task-list-header-label': {
      'text-align': 'center',
      width: '100%'
    },
    'task-list-item-value-container': {
      'text-align': 'center',
      width: '100%'
    }
}

// 添加的新任务
const addStyle = {
  // 。。
  'task-list-item-value': {
    color: '#fff',
    background: '#2bb97e'
  }
}

// 修改了原有任务
const updateStyle = {
  'task-list-item-value': {
    color: '#1861b4',
    background: '#cdcdce'
  }
}


// 删除了原有任务
const deleteStyle = {
  'task-list-item-value': {
    'text-decoration': 'line-through',
    color: '#789'
  }
}

export function computeStyle (type = '') {
  console.log(type)
  let targetStyle
  switch (type) {
    case 'add':
      targetStyle = Object.assign({}, baseStyle, addStyle)
      break
    case 'update':
      targetStyle = Object.assign({}, baseStyle, updateStyle)
      break
    case 'delete':
      targetStyle = Object.assign({}, baseStyle, deleteStyle)
      break
    default:
      targetStyle = baseStyle
      break
  }
  return targetStyle
}