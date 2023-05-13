import Loading from "./Loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditContact(props){
    const {onChange,handleEditSubmit,contacts} = props;
    const{contactId}= useParams();;
    const [contact ,setViewContact] = useState([]); 
    
    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/users/'+contactId)
        // .then(response => response.json())
        // .then(json => {
        //   if(json){
        //       setViewContact(json)
              
        //   }
          
        // })
        setViewContact(contacts.contacts[contactId])
       
      },[contactId])
   
    
    
    return(
    <>
        {contact.id==undefined ? <Loading/>:
        <>
        <h1 style= {style.heading} >Edit contact:</h1>
        <form onSubmit = {handleEditSubmit} id ={contact.id} style={style.form} value={contact.id} key={contactId}>
            <label style ={style.label}>Name </label>
            <input className  ="heigth"style={style.input} type= "text"  name  ="name" onChange={onChange} placeholder= {contact.name}></input>
            <label style ={style.label}>Phone </label>
            <input className  ="heigth" style={style.input} type= "phone"  name = "phone" onChange={onChange} placeholder= {contact.phone}></input>
            <label style ={style.label}>Email </label>
            <input className  ="heigth" style={style.input} type= "email" name = "email" onChange={onChange} placeholder= {contact.email}></input>
            <label style ={style.label}>User name </label>
            <input className  ="heigth" style={style.input} type= "text" name = "username" onChange={onChange} placeholder= {contact.username}></input>
            <label style ={style.label}>Website </label>
            <input className  ="heigth" style={style.input} type= "text" name = "website" onChange={onChange} placeholder= {contact.website}></input>
            
            <button type = "sumbit" className  ="heigth" style={style.btn}>
                Save
            </button>
        </form> 
        </>
        }
        </>  
        
    )
}

const style ={
    heading:{
        color:'white',
        textAlign:'center'
    },
    form:{
        position:'relative',
        display:'flex',
        flexDirection:"column",
        width:'35%',
        left:"32%"
    },
    label:{
        color:'white',
        textAlign:'center',
        margin:4,
        fontSize:22,
    },
    input:{
        fontSize:22,
        background:'lightgreen',
        border:"none"
    },
    btn:{
        position:'relative',
        left:'36%',
        top:20,
        fontSize:25,
        margin:5,
        width:'25%',
        backgroundImage:'linear-gradient(orange,red)',
        color:'white'
    }
}

export default EditContact;