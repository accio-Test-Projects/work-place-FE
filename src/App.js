import Routes from "./routes";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase";

function App() {
  const app = initializeApp(firebaseConfig);
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
