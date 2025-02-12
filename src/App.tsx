import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
