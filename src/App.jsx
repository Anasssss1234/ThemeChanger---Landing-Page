import React from 'react'
import Page from './Components/Page'
import { ThemeProvider } from './ThemeContext'

function App() {
  return (
    <>
  <ThemeProvider>
  <Page/>
  </ThemeProvider>
    </>
  )
}

export default App
