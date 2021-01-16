import Routing from "./Routing";

import NavBar from "./components/material/NavBar";
import AppContainer from "./components/material/AppContainer";

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Routing />
    </AppContainer>
  );
}

export default App;
