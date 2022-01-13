import { Switch, Route } from "react-router-dom";
import "./App.css";
import AppBar from "./components/AppBar";
import Container from "./components/Container";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
