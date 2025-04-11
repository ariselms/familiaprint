export interface CategoriesType {
  id: string;
  spName: string;
  enName: string;
  spDescription: string;
  enDescription: string;
  imgUrl?: string;
}

export type CategoriesListType = CategoriesType[];