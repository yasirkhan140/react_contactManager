// import link component from router 
import { Link } from "react-router-dom";

export default function ErrorPage() {
  

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* go to home page */}
        <Link to ="/" ><p style ={{color:'white'}}>
           CLick here to back
           </p>
        </Link>
      </p>
    </div>
  );
}