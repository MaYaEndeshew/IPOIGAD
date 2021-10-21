import {useEffect,useState} from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Body/posts/Posts";
import Sidebody from "../../components/Body/sidebody/Sidebody";
import './blog.css'
import axios from "axios"
import { useLocation } from "react-router";

export default function Blog() {
    const [posts,setPosts] =useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts"+search);
            setPosts(res.data)
        };
        fetchPosts();
    },[search]);
    return (
        <>
          <Header/>
          <div className="blog">
              <Posts posts ={posts}/>
              <Sidebody/>
            </div>  
        </>
    )
}
