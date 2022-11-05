import './App.css';
import { useState } from "react";
import WalletInputs from './components/WalletInputs';
import NativeTokens from './components/NativeTokens';
import Tokens from './components/Tokens';

function App() {

  const [wallet, setWallet] = useState("");
  const [chain, setChain] = useState("0x1");
  const [nativeBalance, setNativeBalance] = useState(0);
  const [nativeValue, setNativeValue] = useState(0);
  const [tokens, setTokens] = useState([]);

  return (
    <div className="App">
      <WalletInputs
        chain={chain}
        setChain={setChain}
        wallet={wallet}
        setWallet={setWallet}
      />
      <NativeTokens
        chain={chain}
        wallet={wallet}
        nativeBalance={nativeBalance}
        setNativeBalance={setNativeBalance}
        nativeValue={nativeValue}
        setNativeValue={setNativeValue}
      />
      <Tokens
        chain={chain}
        wallet={wallet}
        tokens={tokens}
        setTokens={setTokens}
      />
      <br/><br/><br/>
      <p>
        <h2>Дизайн мог быть такой: </h2> <br/>
        <img src="https://sun9-42.userapi.com/impg/pyM5ygKfFLKX3vRjCxku4uiYrKE0UqnnB5VIPg/mxhzNjCouYI.jpg?size=1920x1080&quality=96&sign=a5c589f88d648e7121665f18b8e55341&type=album" 
        alt="МДааааа" width="800" ></img>
        <br/>
        <br/>
        <h2>Но он такой: </h2> 
        <img src="https://sun9-34.userapi.com/impg/qLpweAc5RLkxTjVRlRNFpK57wRwmGgCK5vjsVA/0NVSfdvf0EE.jpg?size=1920x1080&quality=96&sign=2a2ae8a2fd50adeab6a46fadc5e3df61&type=album" 
        alt="МДааааа" width="800" ></img>

      </p>

    </div>

  );
}

export default App;
