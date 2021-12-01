export interface Comment {
  name: string;
  createdAt: string;
  comment: string;
}

export interface Comments {
  comments: Comment[];
}

export interface RootObject {
  data: Comments;
}
