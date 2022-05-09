import "./App.scss";
import { Header } from "./components/Header";
import { Employee } from "./components/Employee";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>Employee Site</h1>
      <Header />
      <Employee />
      <Footer />
    </div>
  );
}

export default App;
