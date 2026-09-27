
import './home.css'
const Project1 =({name,prize,image,detail,cutprize,realprize,disprize})=>{
    return(
           <div>
            
                 <div className='main-pagedaraz_'>
    <div className="product-image">
        <img className='img' src={'http://localhost:8000/'+image}/>
        </div>
        <div className='name_product'>
        <h2>{name}</h2>
    </div>
        <div className='detail-'>
            <p>{detail}</p>
            </div>
           
        <div className='prize-'>
           
            <h1>Rs.{realprize}</h1>
            </div>
            <div className="disprize_">
                 <p className="cutprize_">{cutprize}</p>
                <p>{disprize}</p>
                  
              
            </div>
 
            
</div>
                    
           </div>
          
    )
}
export default Project1