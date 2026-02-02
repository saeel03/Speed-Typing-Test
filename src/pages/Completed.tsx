import React from 'react'

import { useTypingStore } from '../store/useTypingStore'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd';

const Completed = () => {

  const {wpm,accuracy,time} = useTypingStore();
  const navigate=useNavigate();
  return (

    <div>

      <h1>Test Completed</h1>
      <h1>WPM: {wpm}</h1>
      <h1>Accuracy: {accuracy}</h1>
      <h1>Time: {time}s</h1>
      <Button onClick={()=>{ navigate("/")}}> Go again</Button>


    
      
    </div>
  )
}

export default Completed
