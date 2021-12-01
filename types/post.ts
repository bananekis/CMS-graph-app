export interface Photo {
  url: string;
}

export interface Author {
  bio: string;
  id: string;
  name: string;
  photo: Photo;
}

export interface FeaturedImage {
  url: string;
}

export interface Category {
  name: string;
  slug: string;
}

export interface Node {
  createdAt: Date;
  slug: string;
  author: Author;
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  categories: Category[];
}

export interface Edge {
  node: Node;
}

export interface PostsConnection {
  edges: Edge[];
}

export interface Post {
  postsConnection: PostsConnection;
}

export interface RootObject {
  data: Post;
}
