import {
  Author,
  CardDetail,
  CardWidget,
  Categories,
  Comments,
  Form,
  Loader,
} from "../../components";
import { Params } from "../../types";
import { Post } from "../../types/postDetail";
import { getPostDetails, getPosts } from "../../services";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  post: Post;
}

const PostDetails = ({ post }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <CardDetail post={post} />
          <Author author={post.author} />
          <Form slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <CardWidget
              categories={post.categories.map((category) => category.slug)}
              slug={post.slug}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getStaticProps = async ({ params }: Params) => {
  const data = (await getPostDetails(params.slug)) || [];

  return { props: { post: data } };
};

export const getStaticPaths = async () => {
  const posts = (await getPosts()) || [];

  return {
    paths: posts.map(({ node: { slug } }) => {
      return { params: { slug } };
    }),
    fallback: true,
  };
};
