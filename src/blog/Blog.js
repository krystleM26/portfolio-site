import React, { useEffect, useState } from 'react';
import '../styles/blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/green-code`
        );
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
        setLoading(false);
      }
    }

    fetchMediumPosts();
  }, []);

  const getExcerpt = (html) => {
    const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return text.length > 200 ? text.slice(0, 200).trim() + '…' : text;
  };

  return (
    <section className='page blog-container'>
      <header className='page-header'>
        <p className='eyebrow'>Blog</p>
        <h1 className='display'>Well-Balanced Tech</h1>
      </header>

      {loading ? (
        <p className='blog-status'>Loading posts...</p>
      ) : posts.length > 0 ? (
        <div className='posts-list'>
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target='_blank'
              rel='noopener noreferrer'
              className='card post'
            >
              {post.image && (
                <img
                  src={post.image}
                  alt=''
                  className='post-image'
                />
              )}
              <div className='post-body'>
                <p className='pub-date'>
                  {new Date(post.pubDate).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <h2>{post.title}</h2>
                <p className='post-content'>{getExcerpt(post.description)}</p>
                <span className='read-more'>Read on Medium →</span>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p className='blog-status'>No posts found.</p>
      )}
    </section>
  );
};

export default Blog;
