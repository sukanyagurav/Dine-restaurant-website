import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./Pages/HomePage"
import BookingPage from "./Pages/BookingPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/booking" element={<BookingPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
