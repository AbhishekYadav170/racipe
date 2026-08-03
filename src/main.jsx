//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RacipeContext from './context/RacipeContext.jsx';




createRoot(document.getElementById('root')).render(
  <RacipeContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </RacipeContext>
)
// createRoot(document.getElementById('root')).render(
//   <RecipeContext>
//     <BrowserRouter>
//         <App />
//         <ToastContainer />
//     </BrowserRouter>
//   </RecipeContext>
 
// )
