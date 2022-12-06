import './App.css';
import Header from './components/header/header'
import Home from './components/home/home';
import DataProvider from './context/dataProvider';
import DetailView from './components/details/DetailView';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
function App() {
  return (
    <DataProvider className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/product/:id" element={<DetailView/>} />
       <Route path="/cart" element={<Cart/>} />
      </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
