import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/blog.css';

const POSTS_PER_BLOG = 2;

// Edit the descriptions here
const blogs = [
  {
    title: 'Flurry Field Notes',
    description: 'Description coming soon.',
    url: 'https://medium.com/flurrysystems',
    feed: 'https://medium.com/feed/flurrysystems',
  },
  {
    title: 'Krystle Vs. Words',
    subtitle: 'My Hobby Blog',
    description: 'Description coming soon.',
    url: 'https://medium.com/krystle-vs-words',
    feed: 'https://medium.com/feed/krystle-vs-words',
  },
];

const getExcerpt = (html) => {
  const text = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/Continue reading on .*?»/g, '') // Medium's feed footer
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > 140 ? text.slice(0, 140).trim() + '…' : text;
};

async function fetchLatestPosts(feed) {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${feed}`
  );
  const data = await response.json();

  return (data.items || []).slice(0, POSTS_PER_BLOG).map(post => {
    const imgMatch = post.description.match(/<img.*?src="(.*?)"/);
    return {
      ...post,
      image: imgMatch ? imgMatch[1] : null,
    };
  });
}

const BlogCard = ({ blog }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestPosts(blog.feed)
      .then(setPosts)
      .catch(error => console.error(`Error fetching ${blog.title} posts:`, error))
      .finally(() => setLoading(false));
  }, [blog.feed, blog.title]);

  return (
    <article className='card blog-card'>
      <header className='blog-card-header'>
        <h2>{blog.title}</h2>
        {blog.subtitle && <p className='blog-subtitle'>{blog.subtitle}</p>}
        <p className='blog-description'>{blog.description}</p>
      </header>

      <div className='post-previews'>
        {loading ? (
          <p className='blog-status'>Loading posts...</p>
        ) : posts.length > 0 ? (
          posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target='_blank'
              rel='noopener noreferrer'
              className='post'
            >
              {post.image && (
                <img src={post.image} alt='' className='post-image' />
              )}
              <div className='post-body'>
                <p className='pub-date'>
                  {new Date(post.pubDate).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <h3>{post.title}</h3>
                <p className='post-content'>{getExcerpt(post.description)}</p>
              </div>
            </a>
          ))
        ) : (
          <p className='blog-status'>No posts found.</p>
        )}
      </div>

      <a
        href={blog.url}
        target='_blank'
        rel='noopener noreferrer'
        className='button read-more'
      >
        Read More
      </a>
    </article>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    feed: PropTypes.string.isRequired,
  }).isRequired,
};

const Blog = () => {
  return (
    <section className='page blog-container'>
      <header className='page-header'>
        <h1 className='display'>Blog</h1>
      </header>

      <div className='blogs-list'>
        {blogs.map(blog => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
