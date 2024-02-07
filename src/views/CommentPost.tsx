import PostComment from "../Components/PostComments";
import Comments from "../Components/Comments";
import "../App.css";

const CommentPost = () => {
  return (
    <>
      <div className="commentflex">
        {/* 2/7 */}
        {/* コメント一覧を追加していく。 */}
        {/* スレッド一覧をIDで取り出すAPIがあればOK */}
        <PostComment />
        <Comments />
      </div>
    </>
  );
};

export default CommentPost;
