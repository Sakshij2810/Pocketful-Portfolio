import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//code splitting (load components when someone visit them, dont load everything at a time)
const Home = lazy(() => import("./pages/Home/Home"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
