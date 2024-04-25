import styles from './nav.module.css'

const Child = (props) => {
    
    
    var name = props.fathername;
   

    return ( 
        <div className={styles.box}><div className={styles.imtex}>
            <img className={styles.im} src="https://media.istockphoto.com/id/502663991/photo/punjabi-samosa-23.jpg?s=612x612&w=0&k=20&c=Ne0ArOpa-4L2N-INtPnq371fFZoM6qWW6R4ryN9TWW0=    " />
        <div><div className={styles.tex2}>Name:</div>
        <div className={styles.tex3}>Discriptions:</div>
        <div className={styles.tex4}>Likes:</div>
        <div className={styles.tex5}>Price:</div>
        <div className={styles.tex6}>Oder:</div></div>
        </div> 
       </div> 
    

     );
      
}
 
export default Child;