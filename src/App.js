
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Login from "./Login"
import Header from "./Header"
import Home from "./Home"
import Contect from "./Contect"
import Found from "./Found"
import Project2 from "./Project2"
import ProductList from './ProductList'


const App = ()=>{
return(
    <Routes>
<Route path="Project2"element={<Project2/>}/>
<Route path="Login" element={<Login/>}/>

<Route path="Contect" element={<Contect/>}/>
<Route element={<Header/>}>

<Route path="header" element={<Header/>}/>
<Route path="ProductList" element={<ProductList/>}/>
<Route path="/" element={<Home/>}/>


<Route path="*" element={<Found/>}/>

</Route>

    </Routes>
);



};

export default App 