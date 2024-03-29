import { useEffect, useState} from "react";
import "./sidebody.css"
import img2 from "../../../assets/pexels-ave-calvar-martinez-5072316.jpg"
import axios from "axios";
import { Link } from "react-router-dom"

export default function Sidebody() {
    const [cats,setCats] = useState([]);
    useEffect(() => {
         const getCats = async ()=>{
             const res = await axios.get("/categories")
             setCats(res.data)
         }
         getCats();
    }, )
    return (
        <div className= "Sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sideImg"
                src={img2}
                alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

           <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        <Link className="link" to ={`/?cat=${c.name}`}>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                     
                    ))}
                   
                    {/* <li className="sidebarListItem">Studies</li>
                    <li className="sidebarListItem">Cancer society</li>
                    <li className="sidebarListItem">Survivor stories</li> */}

                </ul>

           </div>     
           <div className="sidebarItem">
              <span className="sidebarTitle">Follow Us</span>
              <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon  fab fa-twitter-square"></i>
                    <i className="sidebarIcon  fab fa-pintrest-square"></i>
                    <i className="sidebarIcon  fab fa-instagram-square"></i>
              </div>
            </div>    
               
        </div>
    )
}
