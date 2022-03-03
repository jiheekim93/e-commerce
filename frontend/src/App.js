import './App.css';
import {useState} from 'react';
import CreateForm from "./pages/CreateForm"
import Groceries from "./pages/Groceries"
import { render } from "react-dom";
import {
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

const App = () => {

  return (
      <>
    <main>
      <h1>Lily and Jihee GROCERY</h1>
      <nav>
      <Link to="/home">Home</Link>
      <Link to="/new">Add</Link>
      </nav>
    </main>
    <Routes>
    <Route path="/home" element={<Groceries />}/>
    <Route path="/new" element={<CreateForm />}/>
    </Routes>
    </>
  )
}

export default App;
