import './home.css'
import Project1 from './Project1'
import image3 from './assets/product3.jpg'
import image2 from './assets/handree.avif'
import image from './assets/airbords.avif'
import image4 from './assets/product4.jpg'
import image6 from './assets/product6.jpg'
import image7 from './assets/product7.jpg'
import image8 from './assets/newproducts.avif'
import headerimg from './assets/headerimg1.avif'
import headerimg2 from './assets/headerimg2.avif'
import headerimg3 from './assets/headerimg3.avif'
import catimg from './assets/cat1.jpg_.avif'
import catimg2 from './assets/cat2.jpg_.avif'
import catimg3 from './assets/cat3.jpg_.avif'
import image9 from './assets/proimg9.jpg_.avif'
import {useState,useEffect} from 'react'

const Home = ()=>{

  const [Products,setProducts] = useState([])

  const getData = async()=>{
    console.log('running')
    const response = await fetch('http://localhost:8000/contect/list',{
      method:'GET',
      headers:{'Contect-Type':'application-json'}
    })
    const result = await response.json()
    console.log(result.list)
    setProducts(result.list)
  }
  

  useEffect(()=>{
    getData()
  },[])




return(

<div className="main-main_" >
        <div className='project2'>
       
       
        <div className="secheader_">
             <p className="newtext_">on sale now</p>
             <p className="newbutton_">shop all products</p>
            </div>
 <div className='card-daraz' >
     {Products.map((item,index)=>{
      return   <Project1 image={item.file} name={item.name} detail={item.detail} cutprize='' realprize={item.brand} disprize=''/>
     })}
    
    <Project1/>
 </div>







                    
</div>
                        
                        <div>
                                <label className='catlabel-'>Categories</label>
                        <div className='ctaback-'>
                               <div className="catagry_">    
                               <div>
                                <img src={catimg} className='catimg-'/>
                               </div>
                               <p className='catnames-'>Accessory Kits</p>
                        </div>
                      <div className='catagry_'>   
                        <img src={catimg2} className='catimg-'/>
                        <p className='catnames-'>3D Printers</p>
                      </div>
                      <div className='catagry_'>   
                        <img src={catimg3} className='catimg-'/>
                        <p className='catnames-'>Pasta, Noodle & Pizza Tools</p>
                      </div>
                        </div>
                        </div>
</div>




)

}
export default Home