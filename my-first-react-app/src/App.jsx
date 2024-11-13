import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Students from './components/Student'

function App() {
  const [count, setCount] = useState(1)
  const students = [
    {"name": "Joe", "age": 27},
    {"name": "Alice", "age": 27},
    {"name": "Rylan", "age": 27},
    {"name": "George", "age": 28},
    {"name": "Ted", "age": 25}
  ]

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Display {count} names
        </button>
      </div>
      <div>
        {students.slice(0, count).map((student) => (
          <Students name={student.name} age={student.age} />
        ))}
      </div>
    </>
  )
}

export default App
