import { useState, useEffect, useCallback } from 'react';
import { TextField, Container, Typography } from '@mui/material';
import PostList from '../components/PostList';
import PostDetailsModal from '../components/PostDetailsModal';
import { fetchPosts } from '../services/api';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const loadPosts = useCallback(async () => {
    try {
      const newPosts = await fetchPosts(page);
      if (newPosts.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      setError('Failed to load posts. Please try again later.');
      console.error(error);
    }
  }, [page]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
          mb: 4,
        }}
      >
        Postagens do Blog
      </Typography>
      <TextField
        fullWidth
        label="Buscar postagens por título..."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          mb: 4,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'primary.main',
            },
            '&:hover fieldset': {
              borderColor: 'primary.dark',
            },
          },
        }}
      />
      <PostList
        posts={filteredPosts}
        onLoadMore={handleLoadMore}
        hasMore={hasMore}
        onClick={handlePostClick}
      />
      {error && (
        <Typography color="error" align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
      <PostDetailsModal
        post={selectedPost}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </Container>
  );
};

export default HomePage;
