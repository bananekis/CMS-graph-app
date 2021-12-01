import { Categories } from "../types/categories";
import { CategoryPost } from "../types/categoryPost";
import { Comments } from "../types/comments";
import { Post } from "../types/post";
import { PostDetail } from "../types/postDetail";
import { RelatedPost } from "../types/relatedPost";
import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result: Post = await request(`${graphqlAPI}`, query);

  return result.postsConnection.edges;
};

export const getPostDetails = async (slug: string) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      posts(where: { slug: $slug }) {
        createdAt
        slug
        author {
          bio
          id
          name
          photo {
            url
          }
        }
        title
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;

  const result: PostDetail = await request(`${graphqlAPI}`, query, { slug });

  return result.posts[0];
};

export const getRecentPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_ASC, last: 3) {
        createdAt
        title
        slug
        featuredImage {
          url
        }
      }
    }
  `;

  const result: RelatedPost = await request(`${graphqlAPI}`, query);

  return result.posts;
};

export const getSimilarPosts = async (categories: string[], slug: string) => {
  const query = gql`
    query GetSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        createdAt
        title
        slug
        featuredImage {
          url
        }
      }
    }
  `;

  const result: RelatedPost = await request(`${graphqlAPI}`, query, {
    categories,
    slug,
  });

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query MyQuery {
      categories {
        name
        slug
      }
    }
  `;

  const result: Categories = await request(`${graphqlAPI}`, query);

  return result.categories;
};

export const getComments = async (slug: string) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result: Comments = await request(`${graphqlAPI}`, query, { slug });

  return result.comments;
};

export const getCategoryPost = async (slug: string) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: { categories_some: { slug: $slug } }) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result: CategoryPost = await request(`${graphqlAPI}`, query, { slug });

  return result.postsConnection.edges;
};

export const submitComment = async (obj: any) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });

  return result.json();
};
