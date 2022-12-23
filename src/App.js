import { Home } from "./component/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Routes exact path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
