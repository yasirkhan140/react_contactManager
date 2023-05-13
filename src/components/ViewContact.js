import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewContact (props){
    const {contacts}=props
    const [viewContact ,setViewContact] = useState([]);

    
    
    const {contactId} = useParams();
    
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
     
    return (
        <>
        <h2 className="heading" style ={style.mainHeading}>View Contact</h2>
        <div className="View-contact" style={style.viewContact}>
    
            <div className="view-content-div" >
                <div className="user-name view" style={style.contentDiv}>
                    <p style={style.heading}>User Name :</p>
                    <span style={style.content}>{viewContact.username}</span>
                </div>
                <div className="name-div view" style={style.contentDiv}>
                    <p style={style.heading}>Name :</p><span style={style.content}>{viewContact.name}</span>
                </div>
                <div className="phone-div view" style={style.contentDiv}>
                    <p  style={style.heading}>Phone : </p>
                    <span style={style.content}>{viewContact.phone}</span>
                </div>
                <div className="email view" style={style.contentDiv}>
                    <p style={style.heading}>Email :</p>
                    <span style={style.content}>{viewContact.email}</span>
                </div>
               
                <div className="website view" style={style.contentDiv}>
                    <p style={style.heading}>Website :</p>
                    <span style={style.content}>{viewContact.website}</span>
                </div>
                {!viewContact.address ? <h1 style={{color:"orange"}}>Address not found..</h1> :
                    <>
                        <div className="suite view" style={style.contentDiv}>
                            <p style={style.heading}>Suite :</p>
                            <span style={style.content}>{viewContact.address.suite}</span>
                        </div>
                        <div className="street view" style={style.contentDiv}>
                            <p style={style.heading}>Street :</p>
                            <span style={style.content}>{viewContact.address.street}</span>
                        </div>
                        <div className="city view" style={style.contentDiv}>
                            <p style={style.heading}>City :</p>
                            <span style={style.content}>{viewContact.address.city}</span>
                        </div>
                        <div className="zipcode view" style={style.contentDiv}>
                            <p style={style.heading}>Zip code :</p>
                            <span style={style.content}>{viewContact.address.zipcode}</span>
                        </div>
                    </>
                }
                
                
            </div>
        </div>
        </>
    )
}
const style ={
    mainHeading:{
        display:'inline-block',
        position:"relative",
        left:'40%',
        color:'white'
    },
    viewContact:{
        position:"relative",
        left:'35%',
        width:350,
        background:"lightgreen",
        display:'flex'
    },
    contentDiv:{

        width:350
    },
    heading:{
        display:'inline',
        fontWeight:'600',
        fontSize:25
    },
    content:{
        display:'inline-block',
        fontSize:20
    }
}

export default ViewContact;