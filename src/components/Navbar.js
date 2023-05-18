// import usr navigate hook for the navigate to home 
import { useNavigate } from "react-router-dom";

function Navbar(){
    // navigate
    let navigate = useNavigate();
    // handle the click on logo/heading
    const handleClick = ()=>{
       
        navigate('/')
    }

    return(

        <div className="navbar" style={style.navbar}>
            <button className="home-btn" href = "/"style={style.home}onClick={handleClick} >
                <i className="fa-sharp fa-solid fa-address-book"></i>
            </button>
            <span style = {style.heading}> Contact App</span>
            
            
        </div>
    )
}
// styling of navbar 
const style ={
    navbar:{
        background:'rgb(190, 192, 221)',
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
}

export default Navbar;