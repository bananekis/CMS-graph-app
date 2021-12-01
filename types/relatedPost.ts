export interface FeaturedImage {
  url: string;
}

export interface Post {
  createdAt: Date;
  title: string;
  slug: string;
  featuredImage: FeaturedImage;
}

export interface RelatedPost {
  posts: Post[];
}

export interface RootObject {
  data: RelatedPost;
}
