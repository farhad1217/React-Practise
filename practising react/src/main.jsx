import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ScrollIndicator from "./component/scroll_indicator/scrollIndicator"

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <>
    <ScrollIndicator />
    <App />
  </>
  // </StrictMode>,
  
)
