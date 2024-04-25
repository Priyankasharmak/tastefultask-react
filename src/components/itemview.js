import styles from './nav.module.css'
import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-modal'



const Item=(props)=>{
    var dish=props.listdata
    var read=props.listsdata
    const [modelvisible,setmodelvisible]=useState(false)
    function deletedata(dish){
        
        axios.delete("http://localhost:5000/delete", {
            headers: {
                "Content-Type": "application/json",
            },
            data: { id: dish.id }, 
        })
        .then(response => {
            
            console.log(response.data);
            read()
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
            }
       // function updatedata(box){}
        
return (<div className={styles.box}>
    <Modal isOpen={modelvisible}>

        hello
        <button onClick={()=>{
            setmodelvisible(false)
        }}>close</button>
    </Modal>
    
    
    
    
    <div className={styles.imtex}>
    <img className={styles.im} src={dish.Photo}/>
<div><div className={styles.tex2}>Name: {dish.Name}</div>
<div className={styles.tex3}>Discriptions:{dish.Descriptions}</div>
<div className={styles.tex4}>item contains:{dish["Items contain"]}</div>
<div className={styles.tex5}>time requried:{dish["Time requried"]}</div>
<div className={styles.tex6}>Oder:{dish.itemscontain}</div> 
<div><button onClick={()=>{
   setmodelvisible(true)
}}>update</button>
<button onClick={()=>{
   deletedata(dish)
   }}>delete</button>

   
   </div></div>
</div> 
</div> )
}
export  default Item;


