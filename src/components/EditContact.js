// import all component,params and hooks
import Errorpage from './ErrorPage';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditContact(props){
     
    // get from props came from the app.js
    const {onChange,handleEditSubmit,contacts} = props;
    
    // use to get the contactId on url
    const{contactId}= useParams();;
    // to set and view a contact data 
    const [contact ,setViewContact] = useState([]); 
   
    // to set the contact data in set view contact state.
    
    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/users/'+contactId)
        // .then(response => response.json())
        // .then(json => {
        //   if(json){
        //       setViewContact(json)
              
        //   }
          
        // })
        if(contacts.contacts!==undefined){
            setViewContact(contacts.contacts[contactId])
       
        };
        
    },[])
   
    
    
    return(
        <div className="edit-main" style={style.main}>
            {/* if contact have a data then render form else render Error page  */}
            {contact.id==undefined ? <Errorpage/>:
            <>
            <p style= {style.heading} >Edit contact:</p>
            <form className ="edit-form"onSubmit = {handleEditSubmit} id ={contact.id} style={style.form} value={contact.id} key={contactId}>
                <label style ={style.label}>Name </label>
                <input className  ="heigth input"style={style.input} type= "text"  name  ="name" onChange={onChange} placeholder= {contact.name}></input>
                <label style ={style.label}>Phone </label>
                <input className  ="heigth input" style={style.input} type= "phone"  name = "phone" onChange={onChange} placeholder= {contact.phone}></input>
                <label style ={style.label}>Email </label>
                <input className  ="heigth input" style={style.input} type= "email" name = "email" onChange={onChange} placeholder= {contact.email}></input>
                <label style ={style.label}>User name </label>
                <input className  ="heigth input" style={style.input} type= "text" name = "username" onChange={onChange} placeholder= {contact.username}></input>
                <label style ={style.label}>Website </label>
                <input className  ="heigth input" style={style.input} type= "text" name = "website" onChange={onChange} placeholder= {contact.website}></input>
                
                <button type = "sumbit" className  ="heigth btn-create" style={style.btn}>
                    Save
                </button>
            </form> 
            </>
            }
        </div>  
        
    )
}

const style ={
    main:{
        backgroundImage:'linear-gradient(90deg,blue,black)'
    },
    heading:{
        color:'white',
        textAlign:'center',
        fontSize:30,
        margin:0
    },
    form:{
        position:'relative',
        display:'flex',
        flexDirection:"column",
        width:'35vw',
        left:"32vw"
    },
    label:{
        color:'white',
        textAlign:'center',
        margin:4,
        fontSize:22,
    },
    input:{
        fontSize:22,
        background:'whitesmoke',
        border:"none",
        textAlign:'center'
    },
    btn:{
        position:'relative',
        left:'13vw',
        top:20,
        fontSize:25,
        margin:5,
        width:'25%',
        backgroundImage:'linear-gradient(orange,red)',
        color:'white'
    }
}

export default EditContact;