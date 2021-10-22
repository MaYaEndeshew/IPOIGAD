import {Link} from "react-router-dom"
import Posts from "../Body/posts/Posts";
import "../post/post.css";
//import img1 from "../../assets/pexels-tara-winstead-7723607.jpg"
//import img3 from "../../assets/pexels-tara-winstead-7723584.jpg"
export default function Post({post}) {
    return (
        <div className="post">
            {post.photo && (
                <img
                    className="postImg"
                    src={post.photo}
                    alt=""
                />
            )}
           
            <div className="postInfo">
                <div className="postCats">
                    {Posts.categories.map((c)=>(
                        <span className="postCat">{c.name}</span>
                    ))}
                </div>
                    {/* <span className="postCat">Cancer Society</span> */}
                 <Link className="link" to={`/post/${post._id}`}> 
                    <span className="postTitle">{post.title}</span>
                 </Link>      
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()} </span>

            </div>
            <p className = "postDesc">
               {post.desc}
            </p>
            
        </div>
    )
}
