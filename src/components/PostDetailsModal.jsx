import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  Modal, 
  Box, 
  Typography, 
  CircularProgress, 
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { fetchUser } from '../services/api';

const PostDetailsModal = ({ post = null, open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : 600,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: 2,
  };

  useEffect(() => {
    if (post) {
      setLoading(true);
      setError(null);
      fetchUser(post.userId)
        .then((userData) => {
          setAuthor(userData.name);
          setLoading(false);
        })
        .catch(() => {
          setError('Falha ao carregar informações do autor');
          setLoading(false);
        });
    }
  }, [post]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        {loading && (
          <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
          </Box>
        )}

        {!loading && !post && (
          <Typography variant="body1" color="text.secondary">
            Nenhum post selecionado
          </Typography>
        )}

        {!loading && post && (
          <>
            <Typography variant="h5" gutterBottom>
              {post.title}
            </Typography>
            
            <Typography variant="body1" paragraph>
              {post.body}
            </Typography>
            
            {error ? (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            ) : (
              <Typography variant="subtitle1" color="text.secondary">
                Autor: {author}
              </Typography>
            )}
          </>
        )}
      </Box>
    </Modal>
  );
};

PostDetailsModal.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    userId: PropTypes.number
  }),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default PostDetailsModal;
