import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60

    // Minutes WITHOUT leading zero
    // Seconds WITH leading zero
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
  }

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setTime(0)
    setIsRunning(false)
  }

  return (
    <div className="container">
      <h1>Stopwatch</h1>

      {/* IMPORTANT CHANGE HERE */}
      <p>Time: {formatTime(time)}</p>

      <div className="buttons">
        {!isRunning ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handleStop}>Stop</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}