import { Comment } from "../types/comments";
import { getComments } from "../services";
import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

interface Props {
  slug: string;
}

const Comments = ({ slug }: Props) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 border-yellow-500 border-b-2">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-b border-gray-100 mb-4 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">
                  {comment.name} on{" "}
                  {moment(comment.createdAt).format("MMM DD,YYYY")}
                </span>
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
