




function CreateConatact(props){
    // get all from props 
    const{onChange,onsubmit}= props;

    return (
        <div className = "create-contact" style= {style.main}>
            <h1 style={style.heading}> Create Contact</h1>
           <form onSubmit = {onsubmit} style={style.form}>
                <label style={style.label}>Id </label>
                <input style={style.input} className = "heigth input"type = "number"  name = "id"  onChange={onChange} placeholder='Type a id other than previous' required></input>
                <label style={style.label}>Name </label>
                <input style={style.input} className = "heigth input" type= "text" placeholder="Type a name" name  ="name" onChange={onChange}></input>
                <label style={style.label}>Phone </label>
                <input style={style.input} className = "heigth input"type= "number" placeholder="Type a phone" name = "phone" onChange={onChange}></input>
                <label style={style.label}>Email </label>
                <input style={style.input} className = "heigth input" type= "email" placeholder="Type a email" name = "email" onChange={onChange}></input>
            
                <button type = "sumbit" style={style.btn} className="btn btn-create">
                    Add 
                </button>
           </form>
        </div>
    )
}
// styling of this component
const style ={
    main:{
        backgroundImage:'linear-gradient(90deg,black,pink)'
    },
    heading:{
        color:'white',
        textAlign:'center',
        margin:0
    },
    form:{
        position:'relative',
        display:'flex',
        flexDirection:"column",
        width:'50vw',
        left:"25vw"
    },
    label:{
        color:'white',
        margin:4,
        textAlign:'center',
        fontSize:22,
    },
    input:{
        fontSize:22,
        background:'black',
        border:"none",
        width:'2wh',
        color:'white'
    },
    btn:{
        position:'relative',
        left:'36%',
        top:20,
        fontSize:25,
        margin:5,
        width:'25%',
        backgroundImage:'linear-gradient(green,black)',
        color:'white'
    }
}
export default CreateConatact;