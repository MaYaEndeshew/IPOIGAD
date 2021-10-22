import { useEffect,useState,useLocation } from "react";
import "./singlepost.css"
import axios from "axios"
import {Link} from "react-router-dom"
//import img2 from "../.././assets/pexels-klaus-nielsen-6303696.jpg"


export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPost] = useState({})

    useEffect(()=>{
        const getPost = async ()=>{
        const res = await axios.get("/posts/" + path);
        setPost(res.data)
        };
        getPost()
    }, [path]);
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={post.photo}
                        alt=" " className="singlePostImg" />
                )}
               
                <h1 className="singlePostTitle">
                    {post.title}
                    
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>

                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor"> 
                    Author: 
                    <Link className="link" to={`/?user=${post.username}`}>
                    <b>{post.username}</b>
                    </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p>
                   {post.desc}
                </p>
            </div>
            
        </div>
    )
}
