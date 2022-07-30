import logo from "../assets/images/airbnblogo.png"
export  function NavBar () {

    return(
        <nav>
        <img className= "nav-img" src={logo} alt ="Logo" />
        </nav>
        
    );
}