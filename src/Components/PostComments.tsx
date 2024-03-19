import { CreateThreadById } from "../APIs/api";
import { useState } from "react";
import { useParams } from "react-router";

const PostComment = () => {
  const [value, setValue] = useState("");
  const { id } = useParams<{ id: string }>();

  const handleCreateFunction = async (value: string) => {
    try {
      if (id === undefined) {
        return;
      }
      const response = await CreateThreadById(id, value);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="commentform">
        <p>コメントを書いてください</p>
        {/* formにするとsubmitの扱いになる */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateFunction(value);
          }}>
          <textarea value={value} onChange={(e) => setValue(e.target.value)} />
          <br />
          <button>送信</button>
        </form>
      </div>
    </>
  );
};

export default PostComment;
