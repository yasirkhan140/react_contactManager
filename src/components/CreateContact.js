




function CreateConatact(props){
    
    const{onChange,onsubmit}= props;
    let x = Math.floor((Math.random() * 100) + 1);
    return (
        <div className = "create-contact">
            <h1 style={style.heading}> Create Contact</h1>
           <form onSubmit = {onsubmit} style={style.form}>
                <label style={style.label}>Id </label>
                <input style={style.input} className = "heigth"type = "number"  name = "id"  onChange={onChange} placeholder='type a id other than previous'></input>
                <label style={style.label}>Name </label>
                <input style={style.input} className = "heigth" type= "text" placeholder="type a name" name  ="name" onChange={onChange}></input>
                <label style={style.label}>Phone </label>
                <input style={style.input} className = "heigth"type= "number" placeholder="type a phone" name = "phone" onChange={onChange}></input>
                <label style={style.label}>Email </label>
                <input style={style.input} className = "heigth" type= "email" placeholder="type a email" name = "email" onChange={onChange}></input>
            
                <button type = "sumbit" style={style.btn} >
                    Add 
                </button>
           </form>
        </div>
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
export default CreateConatact;