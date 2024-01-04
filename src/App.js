import Home from "./Home";

import MovieState from "./contex/MovieState";

function App() {
  return (
    <MovieState>
      <Home />
    </MovieState>
  );
}

export default App;
