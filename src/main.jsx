import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/reem-kufi/600.css'
import '@fontsource/reem-kufi/700.css'
import '@fontsource/ibm-plex-sans-arabic/400.css'
import '@fontsource/ibm-plex-sans-arabic/500.css'
import '@fontsource/fraunces/400.css'
import '@fontsource/fraunces/400-italic.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
