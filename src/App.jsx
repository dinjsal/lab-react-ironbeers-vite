import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from '/src/pages/HomePage'
import AllBeersPage from '/src/pages/AllBeersPage'
import RandomBeerPage from '/src/pages/RandomBeerPage'
import AddBeerPage from '/src/pages/AddBeerPage'
import BeerDetailsPage from '/src/pages/BeerDetailsPage'
import Navbar from '/src/components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<AllBeersPage />} />
        <Route path='/random-beer' element={<RandomBeerPage />} />
        <Route path='/new-beer' element={<AddBeerPage />} />
        <Route path='/beers/:beerId' element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
