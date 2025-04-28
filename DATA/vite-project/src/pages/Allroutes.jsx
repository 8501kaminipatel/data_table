
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import EditProduct from '../components/EditProduct'
import ProductDetails from '../components/ProductDetails'
import ProductList from '../components/ProductList'
import Home from './Home'


const Allroutes = () => {
    return (
        <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/editproduct" element={<EditProduct />} />

            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/productlist" element={<ProductList />} />

        </Routes>
    )
}

export default Allroutes;