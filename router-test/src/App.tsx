import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./routers/Home";
import About from "./routers/About";
import RouterPropTest from "./routers/RouterPropTest";
import RouterPropsResult from "./routers/RouterPropsResult";
import Nav from "./components/Nav";
import Student from "./routers/Student";
import StudentDetail from "./routers/StudentDetail";
import { useParams } from 'react-router-dom';

function App() {
  const profile = () => {
    const {id} = useParams();
  }
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/routerPropTest" element={<RouterPropTest />} />
          <Route path="/routerPropsResult" element={<RouterPropsResult />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student/:id" element={<StudentDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
