import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FeedPage from './newsfeed/FeedPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedPage />
  </StrictMode>,
)
