
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basiccss from "./css/Basiccss"
import Htmlintro from "./html/htmlintro"
import Langfun from "./java/lanfun"
import Basicreact from "./react/Basicreact"
import Navbar from "./Navbar";
import Home from "./Home";
export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="css" element={<Basiccss />} />
          <Route path="html" element={<Htmlintro />} />
          <Route path="java" element={<Langfun />} />
          <Route path="react" element={<Basicreact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}