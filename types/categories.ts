export interface Category {
  name: string;
  slug: string;
}

export interface Categories {
  categories: Category[];
}

export interface RootObject {
  data: Categories;
}
