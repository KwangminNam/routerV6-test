import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./routers/Home";
import About from "./routers/About";
import RouterPropTest from "./routers/RouterPropTest";
import RouterPropsResult from "./routers/RouterPropsResult";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/routerPropTest" element={<RouterPropTest />} />
          <Route path="/routerPropsResult" element={<RouterPropsResult />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
