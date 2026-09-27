
import { useEffect, useState } from 'react';
import './contect.css'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Product = () => {
    const [name, setName] = useState()
    const [lastname, setlast] = useState()
    const [brand, setBrand] = useState()
    const [Myimage, setMyimage] = useState()
    const [detail, setDetail] = useState()


    const nameChange = (event) => {
        setName(event.target.value);
    };

    const lastnameChange = (event) => {
        setlast(event.target.value);
    };
    const brandChange = (event) => {
        setBrand(event.target.value);
    };


    const fileChange = async (event) => {
        const file = event.target.files[0];
        const formdata = new FormData();
        formdata.append("image", file);


        const response = await fetch("http://localhost:8000/image/upload", {
            method: "POST",
            body: formdata,
        });
        const result = await response.json()
        console.log(result.file)
        setMyimage(result.file)
    };
    const detailChange = (event) => {
        setDetail(event.target.value);
    };

    const SaveHandler = async (event) => {
        event.preventDefault()
        const product = {
            name: name,
            lastname: lastname,
            brand: brand,
            file: Myimage,
            detail: detail,
        };

        const response = await fetch('http://localhost:8000/contect/data', {
            method: 'POST',
            body: JSON.stringify({ product: product }),
            headers: { 'Content-Type': 'application/json' }
        })
        const result = await response.json()
        toast.success(result.message)
    };

    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    console.log(id)

    const getSingleProduct = async()=>{
        const response = await fetch('http://localhost:8000/single/product?id='+id,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        const result = await response.json()
        console.log(result.item)
        setName(result.item.name)
        setBrand(result.item.brand)
        setlast(result.item.lastname)
        setDetail(result.item.detail)
    }

    useEffect(()=>{
        getSingleProduct()
    },[])

    return (
        <form onSubmit={SaveHandler}>
            <div className='Main_main_box'>
                <div className='main-contect-box-2'>
                    <div className='main-contect-box-2-text-1'>
                        <h1>Hello,Welcome!</h1>
                        <h2>Create a new Product?</h2>
                    </div>
                </div>
                <div className='main-box'>
                    <label className='input_contect'>Name</label>
                    <input value={name} onChange={nameChange} required className='input_contect' type='text' placeholder='Enter Your Name..' />
                    <label className='input_contect'>Brand</label>
                    <input value={lastname} onChange={lastnameChange} required className='input_contect' type='text' placeholder='Enter Your Brand..' />
                    <label className='input_contect'>price</label>
                    <input value={brand} onChange={brandChange} required className='input_contect' placeholder='Enter your Price..' />
                    <label className='input_contect'>File</label>
                    <input onChange={fileChange} className='file-' type='file' />
                    <label className='input_contect'>Detail</label>
                    <textarea  value={detail} onChange={detailChange} required className='text-' placeholder='Write Something..'></textarea>
                    <button required className='button_contect'>Send</button>
                    <div className='contactlink'>
                        <Link to='/Project2'>Back to Project Page?</Link>
                    </div>
                </div>

            </div>

        </form>

    );
};
export default Product