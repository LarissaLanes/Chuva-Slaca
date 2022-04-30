import GlobalStateProvider from "./global/GlobalStateProvider";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <div>
      <GlobalStateProvider>
        <HomePage/>
      </GlobalStateProvider>
    </div>
  );
}

export default App;

