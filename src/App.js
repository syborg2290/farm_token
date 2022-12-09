import { useAddress } from "@thirdweb-dev/react";
import { useState, useEffect } from "react";

import Home from "./component/home";
import SignIn from "./component/signIn";

import "./App.css";
import 'antd/dist/antd.css';

function App() {
  const address = useAddress();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (address) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [address]);

  return <div className="App">{isLogged ? <Home /> : <SignIn />}</div>;
}

export default App;
