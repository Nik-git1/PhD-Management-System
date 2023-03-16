import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <h1 className="text-7xl font-bold">PhD Management System</h1>
    </div>
  );
}

export default App;
