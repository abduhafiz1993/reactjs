import './App.css'
import AddForm from './AddForm'

interface Task{
  name: string,
  done: boolean
}

const Todolist:Array<Task> =[
          {
            name: 'Html', done: false
          }
        ]

function App() {

  return (
    <div>
      <AddForm todo = {Todolist} />
    </div>
  )
}

export default App
