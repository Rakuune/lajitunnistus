import { useState, useEffect } from 'react'
import Quiz from './Quiz'
import { jsQuizz } from './constants'


function App() {
  const [quizData, setQuizData] = useState([])
  
  return <Quiz quizData={jsQuizz.quizData} />
}

export default App
