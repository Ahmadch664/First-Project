import './productlist.css'
import { useEffect, useState } from 'react'
import { IoMdSettings } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

const ProductList = () => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const getProducts = async () => {
        const response = await fetch('http://localhost:8000/contect/list', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        const result = await response.json()
        console.log(result)
        setProducts(result.list)
    }
    useEffect(() => {
        getProducts()
    }, [])


    const deleteProduct = async (item) => {
        const response = await fetch('http://localhost:8000/product/delete?id=' + item._id, {
            method: 'DELETE',
            headers: { 'Contect-Type': 'application/json' }
        })
        const result = await response.json()
        toast.success(result.message)
    }
    const updateHandler = (item)=>{

    navigate("/contect?id="+item._id);
    };



    return (

        <div className="Product_list_main">
            <div className="Product_list_table">
                <table>
                    <thead className='Product_list_header'>
                        <tr className='Product_List_Rows'>
                            <th>id</th>
                            <th>image</th>
                            <th>name</th>
                            <th>brand</th>
                            <th>price</th>
                            <th>Date</th>
                            <th>detail</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => {
                            return <tr className='Product_list_data'>
                                <td>{item._id}</td>
                                <td className='products_list_images'><img src={'http://localhost:8000/' + item.file} /></td>
                                <td>{item.name}</td>
                                <td>{item.lastname}</td>
                                <td>Rs.{item.brand}</td>
                                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                <td>{item.detail}</td>
                                <tr>
                                    <td>
                                        <IoMdSettings onClick={()=>updateHandler(item)} className='Product-list-actions-1' />
                                    </td>
                                    <td>
                                        <MdDelete onClick={() => deleteProduct(item)} className='Product-list-actions' />
                                    </td>
                                </tr>

                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>



    );
};
export default ProductList