import "./blog.css"
import Post from "../blogPosts/post/Post"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Experience() {
  const url = "http://localhost:5000/api/posts";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async ()=>{
      const res = await axios.get(url);
      setPosts(res.data)
    }
    fetchPosts();
  }, [])

  return (
    <section id="blog">
      <h5>Follow My Journey</h5>
      <h2>Blog</h2>
      <div className="posts">{posts.map(p => <Post post={p}/>)}
       <Link className="btn btn-primary" to="/blogPosts">See Blog Posts</Link>
      </div>
      
    </section>
  )
}