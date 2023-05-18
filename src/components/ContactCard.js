
function ContactCard (props){
    // get all props came from the contact.Js
    const {id,name,phone,email,index,handleView,handleDelete,EditClick} =props;
    
   
    

    return(
        <div className="main-div" style= {style.outer} key={index}>
            <div className="conatact" style={style.contactCard} >
                <div className="img-div" style ={style.imgDiv}>
                    <img src = 'data:image/png;base64,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' alt = "contact card" style={style.img}/>
                </div>
                <div className="content-div" style={style.contentDiv} key={name}>
                    <div className="name-div heigth">
                        <p style={style.heading}>Name :</p><span style={style.content}>{name}</span>
                    </div>
                    <div className="phone-div heigth">
                        <p  style={style.heading}>Phone : </p>
                        <span style={style.content}>{phone}</span>
                    </div>
                    <div className="email heigth">
                        <p style={style.heading}>Email :</p>
                        <span style={style.content}> {email}</span>
                    </div>
                </div>
                
                <div className="btn-div" style={style.btnDiv}>
                    <button className="edit-btn heigth btn" style={style.editBtn} id ={id} value={index} onClick={function(e){EditClick(e)}}>
                        <i className="fa-solid fa-pen"></i>
                    </button>
                                
                    <button className="view-btn heigth btn" style={style.viewBtn}  id ={id} value={index} onClick={handleView}>
                        <i className="fa-solid fa-eye"></i>
                    </button>
                    
                    <button className="delete-btn heigth btn" style={style.deleteBtn}  id={id} value={index} onClick= {handleDelete}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
        
    )
}
// styling of thid component
const style ={
    outer:{
        backgroundImage:"linear-gradient(180deg,rgb(221, 18, 137),rgb(248, 7, 48))",
        width:430,
        borderRadius:'25px',
        margin:4,
        padding:3
    },
    contactCard:{  
        display:'flex',
        alignItems:"center",
        background:"black",
        borderRadius:'25px'
    },
    imgDiv:{
        width:'30%',
        margin:2,
        display:'inline-block',
    },
    img:{
        width:'100%',
        borderRadius:'50%'
    },
    contentDiv:{
        position:'relative',
        display:'inline-block',
        margin:5,
        width:"110%",
        alignontent:'center'
    },
    heading:{
        display:'inline-block',
        color:'white',
        fontSize:18
    },
    content:{
        display:'inline-block',
        color:'white',
    },
    btnDiv:{
        width:47,
        display:'flex',
        flexWrap:"wrap",
        flexDirection:"column",
    },
    editBtn:{
        border:'none',
        width:40,
        background:'yellow',
        borderRadius:"50%",
        margin:5
    },
    viewBtn:{
        border:'none',
        width:40,
        background:'orange',
        borderRadius:"50%",
        margin:5
    },
    deleteBtn:{
        border:'none',
        width:40,
        background:'red',
        borderRadius:"50%",
        margin:5
        
    }
    
}
export default ContactCard;