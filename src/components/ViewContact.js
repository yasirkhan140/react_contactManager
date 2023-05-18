// import all hooks which is to use 
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewContact (props){
    // get data from props/conatact data came from api.
    const {contacts}=props
    // set state for particular element of contact data
    const [viewContact ,setViewContact] = useState([]);

    
    // use params to get the contact Id/index
    const {contactId} = useParams();
    // use effect for setView conatact
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
      },[contactId])
     
    return (
        <div className="main-viewcontact" style ={style.main}>
            <h2 className="view-contact-heading" style ={style.mainHeading}>View Contact</h2>
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
                            <div className="street view " style={style.contentDiv}>
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
        </div>
    )
}
const style ={
    main:{
        backgroundImage:'linear-gradient(90deg,blue,black)'
    },
    mainHeading:{
        display:'inline-block',
        position:"relative",
        left:'40vw',
        color:'white'
    },
    viewContact:{
        position:"relative",
        left:'40vw',
        margin:5,
        width:350,
        background:"pink",
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