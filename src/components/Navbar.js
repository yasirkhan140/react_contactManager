import { useNavigate } from "react-router-dom";

function Navbar(){
    let navigate = useNavigate();
    const handleClick = ()=>{
       
        navigate('/')
    }

    return(
        <div className="navbar" style={style.navbar}>
            <button className="home-btn" href = "/"style={style.home}onClick={handleClick} >
                <i className="fa-sharp fa-solid fa-address-book"></i>
            </button>
            <span style = {style.heading}> Contact App</span>
            <div className="search-container" style={style.searchDiv}>
                <input type ='text' className="heigth" style={style.input} placeholder="Search contact"/>
                <button className="height" style={style.inputBtn}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            
        </div>
    )
}

const style ={
    navbar:{
        background:'rgb(190, 192, 221)',
        marginBottom:8
    },
    home:{
        width:40,
        border:'none',
        background:'transparent',
        fontSize:40,
        marginLeft:-7,
        color:'black',
    },
    heading:{
        fontSize:'1.8rem',
    },
    searchDiv:{
        display:'inline-block',
        position:'relative',
        left:"29%",
        marginBottom:5
    },
    input:{
        width:250,
        borderBottomLeftRadius:40,
        borderTopLeftRadius:40,
        fontSize:20,
        background:"whitesmoke"
    },
    inputBtn:{
        borderBottomRightRadius:40,
        borderTopRightRadius:40,
        width:35,
        fontSize:20,
        background:'whitesmoke',
    }

}

export default Navbar;