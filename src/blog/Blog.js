import React, {useEffect, useState} from 'react'
import '../styles/blog.css';




const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   async function fetchMediumPosts() {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/green-code`
        )
        const data = await response.json();

        const updatedPosts = data.items.map(post => {
          const imgMatch = post.description.match(/<img.*?src="(.*?)"/);
          return {
            ...post,
            image: imgMatch ? imgMatch[1] : null,
          };
        });

        setPosts(updatedPosts);
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
        <h1> The Balanced Dev</h1>
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
                  <div
                  dangerouslySetInnerHTML={{ __html: post.description }}
                  className="post-content"></div>
                  <p>Published on: {post.pubDate}</p>
                  
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