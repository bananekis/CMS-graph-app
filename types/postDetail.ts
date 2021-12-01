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

export interface Child2 {
  text: string;
}

export interface Child {
  type: string;
  children: Child2[];
}

export interface Raw {
  children: Child[];
}

export interface Content {
  raw: Raw;
}

export interface Post {
  author: Author;
  createdAt: Date;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  categories: Category[];
  content: Content;
}

export interface PostDetail {
  posts: Post[];
}

export interface RootObject {
  data: PostDetail;
}
