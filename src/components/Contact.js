// import all components 
import React from "react";
import ContactCard from "./ContactCard";
import Loading from "./Loading";

function Contact(props){
  // get all props came from the app js
  const {contacts,loading,handleAddClick,handleView,handleDelete,EditClick}= props;
    
    
   
    
    return(
        
          <div className="contact-div" style ={style.contactDiv}> 
                   
            {loading ? <Loading/> :
              <>
                <h1 style={style.heading} className="manager-heading">Contacts manager </h1>
                <button className="add-contact-btn heigth btn" style={style.addBtn} onClick ={handleAddClick}> Add Contact</button>
                <div className="contactCard-show" style ={style.contactCardShow}>
                  
                  {/* if data is empty then a show a loading else show a all contactCard  */}
                  {!contacts.contacts ? <Loading/> :
                  // map the array and pass a props 
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
                      key={index}
                    />
                 
                  ))}
                 

                </div>
              </>
            }
          </div>
       
    )
}
// styling of this comonent
const style ={
  contactDiv:{
    backgroundImage:'linear-gradient(90deg,rgb(22, 22, 168),rgb(119, 15, 179))'
  },
  heading:{
    display:'inline-block',
    position:"relative",
    left:'40%',
    color:'white'
  },
  contactCardShow:{
    display:'flex',
    flexWrap:"wrap",
    justifyContent:'center',
  },
  addBtn:{
    display:'inline-block',
    position:"relative",
    left:'40%',
    top:'-5px',
    border:'none',
    width:'100px',
    margin:'5px',
    background:'rgb(242, 214, 140)'
  }
}
export default Contact;