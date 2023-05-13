import { Route, Routes, useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Navbar from "./Navbar";
import CreateConatact from "./CreateContact";
import ViewContact from "./ViewContact";
import EditContact from "./EditContact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";


function App() {

  
  let navigate = useNavigate();
  const [loading,setLoading] =useState(true);
  const [contacts,setContact] =useState([]);
  const [state,setState]= useState({
    name:'',
    email:'',
    phone:'',
  })

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json=> {
        if(json){
          if(!contacts.contacts){
           
            setContact({
              ...contacts,
                contacts:json
          })
          }
            
            setLoading(false)
        }
        
      })
    },[])
    
    const handleAddClick =(e)=>{
      navigate('./add-contact')
    }


    
    
    
    const onChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,            
        })
          
    }
    
    
   
    
    const onsubmit =(event)=>{
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  title:state.name,
                  body:state.email,
                  userId:Math.random().toString(36).slice(2),
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                
              })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                
            
            })
            .catch((err)=> {
                console.log(err.message);
        });
        
        event.preventDefault();
       
        
        var changeArr= contacts.contacts.filter((contact)=>contact.id!='')
        changeArr.push(state)
        setContact({
          ...contacts,
          contacts:changeArr
        })
        navigate('/')
        
        toast.success('Contact create successfully')
        
    }
  
  const handleView = (e)=>{
    let contactId = e.target.value;
    if(contactId!=undefined){
      navigate("./contact/view/"+contactId);
    }
    
    if(contactId!==''){
       
    }
    
  }
  const handleDelete = (e)=> {
    
    let contactId = e.target.id;
    if(contactId!=''){
        fetch('https://jsonplaceholder.typicode.com/posts/'+contactId, {
        method: 'DELETE',
        });
    }
    if(contactId!=''){
      var chngaeArr= contacts.contacts.filter((contact)=>contact.id!=contactId)
      setContact({
        ...contacts,
        contacts:chngaeArr
      })
      toast.error("Delete successfully");
    }
  }
  const EditClick =(e)=>{
    if(e.target.value!=undefined){
      navigate('./edit-contact/'+e.target.value)
      setState({
        id:e.target.id
      })
    }
   
  }
  const handleEditSubmit =(event)=>{
    
    fetch('https://jsonplaceholder.typicode.com/posts/'+event.target.id, {
      method: 'PUT',
      body: JSON.stringify({
        id: state.id,
        title: state.name,
        body: state.email,
        userId: Math.floor((Math.random() * 100) + 1),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
     
      event.preventDefault();
      
      var changeArr= contacts.contacts.filter((contact)=>contact.id!=event.target.id)
      if(event.target.id!=undefined){
        
        changeArr.push(state)
       
        
        setContact({
          ...contacts,
          contacts:changeArr
        })
        navigate('/')
        toast.success('Contact edit successfully')
      }
      
      
      
     
      
      
  }
    
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ="/" element= {<Contact 
          contacts={contacts} 
          loading={loading} 
          handleAddClick = {handleAddClick} 
          handleView={handleView}
          handleDelete={handleDelete}
          EditClick={EditClick}
          
        />}/>
        <Route path ='/contact/view/:contactId' 
          element  ={<ViewContact
            contacts={contacts}

          />}/>

        <Route path = "/add-contact" 
          element = {<CreateConatact 
            onsubmit={onsubmit} 
            onChange={onChange} 
            
            />}/>
        <Route path ="/edit-contact/:contactId" 
          element ={<EditContact 
            onChange={onChange} 
            handleEditSubmit={handleEditSubmit}
            contacts={contacts}
          />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
