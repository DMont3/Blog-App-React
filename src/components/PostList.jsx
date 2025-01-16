import PropTypes from 'prop-types';
import { Grid, Button, Box } from '@mui/material';
import PostCard from './PostCard';

const PostList = ({ posts = [], onLoadMore = () => {}, hasMore = false, onClick }) => {
  return (
    <>
      <Grid container spacing={4} sx={{ py: 4 }}>
        {posts.map((post, index) => (
          <Grid item key={`${post.id}-${post.userId}-${index}`} xs={12} sm={6} md={4}>
            <PostCard post={post} onClick={onClick} />
          </Grid>
        ))}
      </Grid>

      {hasMore && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={onLoadMore}
          >
            Carregar mais
          </Button>
        </Box>
      )}
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
    })
  ),
  onLoadMore: PropTypes.func,
  hasMore: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default PostList;
