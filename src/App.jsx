import "./App.scss";
import { Header } from "./components/Header";
import { Employee } from "./components/Employee";
import { Footer } from "./components/Footer";


function App() {
  const userIsExternal=false;
  return (
    <div className="App">
      <h1>Employee Site</h1>
      <Header userIsExternal={userIsExternal}/>
      <Employee userIsExternal={userIsExternal}/>
      <Footer userIsExternal={userIsExternal}/>
    </div>
  );
}

export default App;
