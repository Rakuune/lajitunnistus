import { useState, useEffect } from 'react'
import Quiz from './Quiz'
import { jsQuizz } from './constants'


function App() {
  const [quizData, setQuizData] = useState([])
  
  useEffect(() => {
    console.log("This is the data: ", {jsQuizz})
    getQuestions()
  },[])

  const getQuestions = async () => {
    try {
      const response = await fetch('mongodb+srv://fullstack:Jape123@cluster0.pwbmw41.mongodb.net/lajitunnistus?retryWrites=true&w=majority')
      const data = await response.json()
      setQuizData(data)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return <Quiz quizData={jsQuizz.quizData} />
}

export default App
