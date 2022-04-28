import GlobalStateProvider from "./global/GlobalStateProvider";
import Router from "./router/Router"

function App() {

  return (
    <div>
      <GlobalStateProvider>
        <Router/> 
      </GlobalStateProvider>
         
    </div>
  );
}

export default App;

