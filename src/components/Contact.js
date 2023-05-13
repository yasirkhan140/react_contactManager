
import React from "react";
import ContactCard from "./ContactCard";
import Loading from "./Loading";

function Contact(props){
    const {contacts,loading,handleAddClick,handleView,handleDelete,EditClick}= props;
    
    
   
    
    return(
        
          <div className="contact-div"> 
                   
            {loading ? <Loading/> :
              <>
                <h1 style={style.heading}>Contacts manager </h1>
                <button className="add-contact-btn heigth" style={style.addBtn} onClick ={handleAddClick}> Add Contact</button>
                <div className="contactCard-show" style ={style.contactCardShow}>
                  
                  
                  {!contacts.contacts ? <Loading/> :
                  contacts.contacts.map((contact,index)=>(
                    <ContactCard 
                      id={contact.id}
                      name={contact.name}
                      phone={contact.phone}
                      email={contact.email}
                      index={index}
                      handleView={handleView}
                      handleDelete={handleDelete}
                      EditClick={EditClick}
                    />
                  
                  ))}
                 

                </div>
              </>
            }
          </div>
       
    )
}
const style ={
  heading:{
    display:'inline-block',
    position:"relative",
    left:'40%',
    color:'white'
  },
  contactCardShow:{
    display:'flex',
    flexWrap:"wrap",
    justifyContent:'center'
  },
  addBtn:{
    display:'inline-block',
    position:"relative",
    left:'40%',
    border:'none',
    width:'100px',
    margin:'5px',
    background:'rgb(242, 214, 140)'
  }
}
export default Contact;