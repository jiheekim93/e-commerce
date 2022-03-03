import './App.css';
import {useState} from 'react';
import CreateForm from "./pages/CreateForm"
import Groceries from "./pages/Groceries"
import Reviews from "./reviews/Reviews"
import { render } from "react-dom";
import {
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom" ;

const App = () => {

  return (
      <>
    <main>
      <h1>Lily and Jihee GROCERY</h1>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Add</Link>
      <Link to="/review">Review</Link>
      </nav>
    </main>
    <Routes>
    <Route path="/" element={<Groceries />}/>
    <Route path="/new" element={<CreateForm />}/>
    <Route path="/review" element={<Reviews />}/>
    </Routes>
    </>
  )
}

export default App;
