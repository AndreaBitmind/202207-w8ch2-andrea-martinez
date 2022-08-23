import useApi from "./useApi/useApi";

function App() {
  const { getStarships, starshipClass } = useApi();

  return (
    <div id="background-container">
      <header id="header-title">Star Wars Test</header>
      <main id="main-container">
        <h2>Starships:</h2>
        <p id="total-ships">Total ships:</p>
        <h2>Starships by class:</h2>
      </main>
    </div>
  );
}

export default App;
