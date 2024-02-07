import { useEffect, useState } from "react";
import { getThreadInterface } from "../Interfaces/API_Interfaces";
import { threadById } from "../APIs/api";
import { useParams } from "react-router";

const CommentsList = () => {
  const [data, setData] = useState<getThreadInterface | null>(null);
  const { id } = useParams<{ id: string }>();
  console.log(id);

  useEffect(() => {
    threadById(id!)
      .then((_data) => setData(_data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="comments">
        <ul>
          {data &&
            data.posts.map((value) => (
              <li key={value.id}>
                <p>{value.post}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default CommentsList;
