// import all mdoules from the react router
import { Route, Routes, useNavigate } from "react-router-dom";
// import all components
import Contact from "./Contact";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import CreateConatact from "./CreateContact";
import ViewContact from "./ViewContact";
import EditContact from "./EditContact";
// import toast for the notification 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import hooks .
import { useEffect, useState } from "react";



function App() {

  // assign navigte to navigate a  url / change the url
  let navigate = useNavigate();
  // create a state to show a loading when data is not get from the db.
  const [loading,setLoading] =useState(true);
  // create a state to set a contact list get from the db .
  const [contacts,setContact] =useState([]);
  // create a state to set edit contact data and create contact data and futher set to the main state (contact state above ).
  const [state,setState]= useState({
    name:'',
    email:'',
    phone:'',
  })
  // use effect 
  useEffect(()=>{
    // fetch/get the data from the json db.
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json=> {
        // if json habe data
        if(json){
          // if contacts.contacts alredy have a data then not set data to state
          if(!contacts.contacts){
          //  set data to contacts
            setContact({
              ...contacts,
                contacts:json
          })
          }
            // set loading false to show a compoenet with data
            setLoading(false)
        }
        
      })
    },[])
    
    // handle add contact btn click on click of add contact then navigate to add contact page
    const handleAddClick =(e)=>{
      navigate('./add-contact')
    }

    // funtion to get the data from input of form edit contact and create contact and set to second state (state )
    const onChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,            
        })
          
    }
    
    
   
    // function to sumbit of create contact form data and make a fake call to db (POST) and set state to contacts from state.
    const onsubmit =(event)=>{
      // fake post call to the db
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
        // prevent the default action of broswer
        event.preventDefault();
       
        // copy all data to variable and push the state data as well as
        var changeArr= contacts.contacts.filter((contact)=>contact.id!='')
        changeArr.push(state)
        // and set to state setContacts 
        setContact({
          ...contacts,
          contacts:changeArr
        })
        // and navigate to home page
        navigate('/')
        // show a notification by toast
        toast.success('Contact create successfully')
        
    }
  // hndle the click on view btn of contact card and on click navigate to contact/view:contactId
  const handleView = (e)=>{
    // get the clicked btn value of fetch the data of paritcular conatact .
    let contactId = e.target.value;
    // if contactId is indefined then not perform anything
    if(contactId!=undefined){
      navigate("./contact/view/"+contactId);
    }
  }
  // handle the click of delete btn of contact card .
  const handleDelete = (e)=> {
    // get the contact id from btn clicked id.
    let contactId = e.target.id;
    // fake DElETE call to the db if contact id is exits and 
    if(contactId!=''){
      fetch('https://jsonplaceholder.typicode.com/posts/'+contactId, {
        method: 'DELETE',
      });
      // copy all data to array exculde which have to delete and set to the conatact state.
      var chngaeArr= contacts.contacts.filter((contact)=>contact.id!=contactId)
      setContact({
        ...contacts,
        contacts:chngaeArr
      })
      // show a notification 
      toast.error("Delete successfully");
    }
  }
  // handle the click of edit btn click 
  // if which btn is clicked if have a value (index of a contact array ).
  // navigate to edit contact page and set id to state (which futher to set the id of contact in setContaact state)
  const EditClick =(e)=>{
    if(e.target.value!=undefined){
      navigate('./edit-contact/'+e.target.value)
      setState({
        id:e.target.id
      })
    }
   
  }
  // handle the submit of edit form 
  const handleEditSubmit =(event)=>{
    // fake PUT call to the db 
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
     

      // prevent the default browser action
      event.preventDefault();
      // copy all daat to variable exculde which is to edit 
      // if id is not undefined then push the edit data contact().
      // and all set to the contacts state.
      // and navigate to the home
      // show a toast notifcation
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
  // return jsx 
  return (
    <div className="App" >

      <Navbar/>
      <Routes>
      {/* set a route for home page and render a contact compontent pass a props to it */}
        <Route path ="/" element= {<Contact 
          contacts={contacts} 
          loading={loading} 
          handleAddClick = {handleAddClick} 
          handleView={handleView}
          handleDelete={handleDelete}
          EditClick={EditClick}
          
        />}/>
        {/*set a route to view contact page  */}
        <Route path ='/contact/view/:contactId' 
          element  ={<ViewContact
            contacts={contacts}

          />}/>
        {/* set a route to add contact form and render the Create contact component */}
        <Route path = "/add-contact" 
          element = {<CreateConatact 
            onsubmit={onsubmit} 
            onChange={onChange} 
            
            />}/>
          {/* set a route to edit contact form */}
        <Route path ="/edit-contact/:contactId" 
          element ={<EditContact 
            onChange={onChange} 
            handleEditSubmit={handleEditSubmit}
            contacts={contacts}
          />} />
      </Routes>
      {/* toast container to show a toast notification */}
      <ToastContainer
        position="bottom-left"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
