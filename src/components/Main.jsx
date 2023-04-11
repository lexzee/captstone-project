import { Route, Routes } from "react-router-dom"
import About from "./About"
import Hero from "./Hero"
import Highlight from "./Highlight"
import Testimonials from "./Testimonials"

const Main = () => {
  return (
    <main>
        <Hero />
        <Highlight />
        <Testimonials />
        {/* <Routes>
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
    </main>
  )
}

export default Main