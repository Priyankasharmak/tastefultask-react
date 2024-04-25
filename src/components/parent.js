import { useEffect, useState } from 'react';
import Child from './child';
import styles from './nav.module.css'
import Navi from './nav';
import Dialog from './dailog box'
import Item from './itemview';

const Parent = () => { 
    


    const [alldata,setalldish]=useState([]);


    useEffect( ()=>{
        console.log("ran from eseffect")
        read()

  

    }  ,[]) 

    const read = ()=>{
        fetch("http://localhost:5000/read")
        .then( (res)=> { return res.json() } ).then( (res)=> {
            console.log(res)
            setalldish(res);
        } )
    }

    return ( 
        <div>

             <Navi readfun={read}></Navi>

            {alldata.map( (dish)=>  (
                <Item   listdata={dish }  listsdata={read} />
) )}
        </div>
        
     );
}
 
export default Parent;