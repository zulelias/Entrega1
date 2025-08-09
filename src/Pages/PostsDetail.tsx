// src/Pages/PostsDetail.tsx
import { useParams } from 'react-router-dom';

const PostsDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalle del post</h1>
      <p>ID del post: {id}</p>
    </div>
  );
};

export default PostsDetail;