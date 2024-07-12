import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/CreateRecipe";
import { SaveRecipe } from "./pages/SaveRecipe";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/auth"} element={<Auth />}></Route>
          <Route path={"/create-recipe"} element={<CreateRecipe />}></Route>
          <Route path={"/save-recipe"} element={<SaveRecipe />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
