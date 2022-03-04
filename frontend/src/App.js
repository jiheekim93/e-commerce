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
      <div className = "logo">
      <h1>Seoul Sisters</h1>
      </div>
      <div className ="nav">
      <Link className = "menu" to="/">Home</Link>
      <Link className = "menu" to="/new">Add</Link>
      <Link className = "menu" to="/review">Review</Link>
      <div id="google_translate_element"></div>
      </div>
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
