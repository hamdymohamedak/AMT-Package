import React from "react";
import "./App.css";
import { Ak_Alert, Button, Loader, ModernBtn, Slider } from "./AMT_Package";
function App() {
  return (
    <>
      <style>{`
    .App{
    display:"flex";
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    }
    `}</style>
      <div className="App">
        <Slider autoplay={true} autoplayInterval={3000}>
          <div>
            <Loader />
            <br />
            <ModernBtn
              hoverColor={"white"}
              allColor={"blue"}
              title={"Hello From AMT"}
            />
            <br />
            <Ak_Alert time={200000} title={"Hello From AMT "} />
          </div>
          <Loader />
          <Loader />
        </Slider>
      </div>
    </>
  );
}
export default App;
