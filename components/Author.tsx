import { Author } from "../types/postDetail";
import Image from "next/image";
import React from "react";

interface Props {
  author: Author;
}

const Author = ({ author }: Props) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-70">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          unoptimized
          alt={author.name}
          height="90px"
          width="90px"
          className="rounded-full"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
