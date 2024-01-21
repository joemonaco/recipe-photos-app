export type RecipeType = {
  _id: string;
  author: string;
  image_id: string;
  title: string;
  tags: [string];
  ingredients: {};
  directions: [string];
};
