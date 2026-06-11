import React from "react";
import { BotaoAlert } from "./components/BotaoAlert";
import { OutraMensagem } from "./components/OutraMensagem";
import { GlobalFunctionProvider } from "./context/GlobalFunctionContext";
import { BotaoConsumer } from "./components/BotaoConsumer";

function App() {
  return (
    <div>
      <BotaoAlert />

      <GlobalFunctionProvider>
        <OutraMensagem />
        <BotaoConsumer/>
      </GlobalFunctionProvider>
    </div>
  );
}

export default App;
