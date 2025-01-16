import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button } from '@mui/material';

const PostCard = ({ post, onClick }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {post.body.substring(0, 100) + '...'}
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: 'primary.main' }}
          onClick={() => onClick(post)}
        >
          Ver Detalhes
        </Button>
      </CardContent>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PostCard;
