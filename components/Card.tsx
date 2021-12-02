import { Node } from "../types/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TodayIcon from "@mui/icons-material/Today";
import moment from "moment";

interface Props {
  post: Node;
}

const Card = ({ post }: Props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8 border-yellow-500 border-2">
      <div className="relative overflow-hidden shadow-md p-60 mb-6">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute h-80 w-full object-cover shadow-lg rounded-lg lg:rounded-lg"
          layout="fill"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-yellow-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            src={post.author.photo.url}
            alt={post.author.name}
            className="align-middle rounded-full"
            width="60px"
            height="60px"
          />
          <p className="inline align-middle text-gray-700 ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <TodayIcon />
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`} passHref>
          <a className="transition duration-500 transform hover:-translate-y-1 inline-block bg-yellow-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue reading
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
