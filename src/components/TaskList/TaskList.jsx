import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import Button from '../UI/Button/Button'
import InputCheckBox from '../UI/InputCheckBox/InputCheckBox'

import style from './TaskList.module.scss'

export default function TaskList({ task, taskDelet, changeStatus, changeTask }) {
  return (
    <ul className={style.list}>
      {
        task.map((item, index) => (
          <TaskItem key={item.id} item={item}>
            <Button onClick={()=> changeTask(index)}>Change</Button>
            <InputCheckBox onClick={() => changeStatus(item.id)}/>
            {item.title}
            <Button onClick={() => taskDelet(item.id)}>Delete</Button>
          </TaskItem>
        ))
      }
    </ul>
  )
}