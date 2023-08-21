import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Suspense } from "react";
import renderRoutes from "./routes";
import Loader from "./components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>{renderRoutes()}</Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
