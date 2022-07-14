import React, { useCallback, useState } from 'react'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'SomeTask'])
  }, [setTasks])

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{index} - {task}</p>
      ))}
    </div>
  )
}

const Button = React.memo(({addTask}) => {
  console.log('Button rendered')
  return <div>
    <button className='btn btn-primary' onClick={addTask}>Add Task</button>
  </div>
})

export default UseCallbackExample