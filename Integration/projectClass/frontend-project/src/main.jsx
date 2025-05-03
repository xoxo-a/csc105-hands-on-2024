import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoPage from './TodoPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoPage/>
  </StrictMode>,
)
