import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EmpListing from './components/CrudPage/EmpListing';
import EmpCreate from './components/CrudPage/EmpCreate';
import EmpDetail from './components/CrudPage/EmpDetail';
import EmpEdit from './components/CrudPage/EmpEdit';
import Footer from './components/Footer/footer';
import Acceuil from './components/Acceuil/Acceuil';
function App() {
  return (
    <div className="App"> 

      <BrowserRouter>
      <Acceuil/>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );

}

export default App;
