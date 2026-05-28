import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

export const PostInfo = ({ post }) => (
  <div className="post">
    <h2 className="post__title">{post.title}</h2>

    <p className="post__body">{post.body}</p>

    <UserInfo user={post.user} />

    <CommentList comments={post.comments} />
  </div>
);
