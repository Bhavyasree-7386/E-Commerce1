import { Route, Routes } from "react-router-dom";
import HomeScreen from "../../screening/homepage";
import AboutScreen from "../../screening/about";
import ContactScreen from "../../screening/contact";
import ProductDetailed from "../../screening/product-viewmore";
export function PostAuthentication(){
    return(
        <>
        <Routes>
        <Route path="/" element={<HomeScreen/>} />
          <Route path="/about" element={<AboutScreen/>} /> 
          <Route path="/contact" element={<ContactScreen />} /> 
          <Route path="/product/:id" element={<ProductDetailed/>}/>
          <Route path="/*" element={<HomeScreen/>}/>
          </Routes>
        </>
    )
}