import Routing from "./Routing";

import AppContainer from "./components/material/AppContainer";
import NavBar from "./components/material/NavBar";

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Routing />
    </AppContainer>
  );
}

export default App;
