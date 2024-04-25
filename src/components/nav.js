import { useState } from 'react';
import styles from './nav.module.css'
import Modal from 'react-modal'
import axios from 'axios';


const Navi = (props) => {
    var name=props.readfun
    
    const[showmodal,setshowmodal]=useState(false);
    const[formname,setformname]=useState("");
const[formdiscription,setformdiscription]=useState("");
const[formitem,setformitem]=useState("");
const[formtime,setformtime]=useState("");

    return ( 
        <div>
            <div className={styles.nav}><div className={styles.tex}>Tastefultask</div>
            <button className={styles.bt}  onClick={()=>{
                console.log("clicked")
                console.log(showmodal);

                setshowmodal(true)


                console.log(showmodal);
        
        }}  >Add item</button></div>
            <div className={styles.tex1}>Task</div>
           
            <Modal isOpen={showmodal}
            className={styles.model}
            > 
        
            <div className={styles.formname}>name  :<input value={formname} onChange={(e)=>{
                setformname(e.target.value)
                
            }} /> </div>
            <div className={styles.formname}>discription  :<input value={formdiscription}
            onChange={(e)=>{setformdiscription(e.target.value)}} /> </div>  

            <div className={styles.formname}>item contain  :<input  value={formitem}
            onChange={(e)=>{setformitem(e.target.value)}}/> </div>

            <div className={styles.formname}>time requried  :<input vlaue={formtime} 
            onChange={(e)=>{setformtime(e.target.value)}}/> </div>


<button onClick={()=>{
                setshowmodal(false)
            }} >close</button> 
            <button onClick={()=>{
                var id = Math.floor(Math.random() * (100 - 1) + 1);
                axios.post("http://localhost:5000/create", 
                { id: id ,Name:formname,des:formdiscription,item:formitem,time:formtime }, 
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                   
                })
                .then(response => {


                    setformtime("")
                    setformdiscription("")
                    setformitem("")
                    setformname("")
                    setshowmodal(false)

                    name()
                    
                    
                    
                    console.log(response.data);
                    
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            }

            
            
            }>add item</button></Modal>   
        </div>
     );
}
 
export default Navi;