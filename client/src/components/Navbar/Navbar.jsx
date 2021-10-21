import "./navbar.css"
import logo from '../../logo.svg';
import ulogo from "../../assets/ucodegirl.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context"

export default function Navbar () {
    const { user,dispatch } = useContext(Context);
    const handleLogout = () =>{
        dispatch({type:"LOGOUT"});
    };
    return (
        <div className="top">
            <div className="topLeft">
                <ul className="topList">
                    <li className="topListItem">
                        <img src={ulogo} className="Applogo" alt=" U-code Girl logo" />
                
                    </li>

                </ul>
               
            </div>
            <div className="topCenter">
                <ul className = "topList">
                    <li className="topListItem"><Link className="link" to="/" > Home </Link></li>
                    <li className="topListItem"><Link className="link" to="/about"> About </Link></li>
                    <li className="topListItem"><Link className="link" to="/blog"> Blogs </Link></li>
                    <li className="topListItem"><Link className="link" to="/write"> Publish </Link></li>
                    <li className="topListItem" onClick={handleLogout}>{user && "Logout"}</li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className="topImg"
                            src={logo}
                            alt=""
                        />

                    ):(
                        <ul className="topList">
                            <li className="topListItem">
                               
                                    <Link className="link" to="/login" > Login </Link>
                                    
                            </li>
                            <li className="topListItem">
                                    
                                    <Link className="link" to="/register" > Register </Link>
                            </li>
                           
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
