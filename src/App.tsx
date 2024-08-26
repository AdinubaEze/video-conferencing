import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import JoinPage from "./pages/JoinPage"

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/join" element={<JoinPage/>}/>
         <Route path="*" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
