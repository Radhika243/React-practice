import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import {ThemeProvider} from './contexts/theme'


function App() {
  const [themeMode,setThemeMode] = useState('light');

  const darkMode = () =>{
    setThemeMode('dark')
  }

  const lightMode = () =>{
    setThemeMode('light')
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightMode,darkMode}}>
      <h1 className='text-3xl text-center text-red-600 bg-sky-400'>Theme switcher - context API</h1>
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeButton />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
    </ThemeProvider>
  )
}

export default App
