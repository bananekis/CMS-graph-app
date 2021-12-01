export interface Photo {
  url: string;
}

export interface Author {
  bio: string;
  name: string;
  id: string;
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
  author: Author;
  createdAt: Date;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  categories: Category[];
}

export interface Edge {
  cursor: string;
  node: Node;
}

export interface PostsConnection {
  edges: Edge[];
}

export interface CategoryPost {
  postsConnection: PostsConnection;
}

export interface RootObject {
  data: CategoryPost;
}
