import {Routes, Route, Outlet} from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';
import Loginsignup from './components/Loginsignup';

function Layout(){
  return (
    <>
    <Loginsignup />
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}
function App() {
  return (
    <div className='bg-red-200'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
