import React, {useEffect, useState} from 'react'
import '../styles/blog.css';




const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/green-code`
        )
        const data = await response.json();
        setPosts(data.items);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      } finally {
        setLoading(false)
      }
    }
    fetchMediumPosts();

  }, [])

  return (
    <div className='blog-container'>
        <h1>My Blog</h1>
        {
          loading ? (
            <p>Loading Posts...</p>

          ) : posts.length > 0 ? (
            <div className='posts-list'>
              {posts.map((post, index) => (
                <div key = {index} className='post'>
                  <a href={post.link} target='_blank' rel="noopener noreferrer">
                    <h2>{post.title}</h2>
                  </a>
                  <p>{post.pubDate}</p>
                  <p>{post.description}</p>
                </div>
              ))}
        </div>
          ): (
            <p>No posts found</p>
          )}
      </div>
  )
};

  
  

export default Blog