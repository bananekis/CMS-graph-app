import { Post } from "../types/relatedPost";
import { getRecentPosts, getSimilarPosts } from "../services";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import moment from "moment";

interface Props {
  categories: string[];
  slug?: string;
}

const CardWidget = ({ categories, slug }: Props) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (slug && !categories) {
      getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res));
    } else getRecentPosts().then((res) => setRelatedPosts(res));
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 border-yellow-500 border-2">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height="40px"
              width="60px"
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardWidget;
