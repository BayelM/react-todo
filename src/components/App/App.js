import { useState } from 'react'
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import TaskList from '../TaskList/TaskList';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import style from './App.module.scss'

function App() {
  const [inpValue, setInpValue] = useState('')
  const [task, setTassk] = useState([])
  const [modal, setModal] = useState(false)
  const [reTask, setReTask] = useState({})

  function changeMainInput (event) {
    setInpValue(event)
  }

  function saveDataMain () {
    if (inpValue) {
      const newObj = {
        id: Date.now(),
        title: inpValue,
        status: false
      }
      setTassk([...task, newObj])
      setInpValue('')
    } else alert('Заполните поле...')
  }


  function taskDelet (id) {
    setTassk(task.filter(item => item.id !== id))
  }


  function changeStatus (id) {
    let newTask = task.map(item => {
      if (item.id === id) {
        item.status = !item.status
      }
      return item
    })
    setTassk(newTask)
  }

  function changeTask (index){
    setModal(!modal)
    setReTask(task[index])
  }
  function saveNewTaks(){
    console.log(task);
  }

 return (
   <>
    <Header />
    <div className={style.container}>
      <div>
        <Input 
          value={inpValue}
          onChange={e => setInpValue(e.target.value)}
        />
        <Button
          onClick={saveDataMain}
        >
          Save
        </Button>
      </div>
      <TaskList 
        task={task}
        taskDelet={taskDelet}
        changeStatus={changeStatus}
        changeTask={changeTask}
        />
    </div>
    {
      modal ?
      <Modal 
        reTask={reTask}
      />
      : null
    }
   </>
 )
}

export default App;