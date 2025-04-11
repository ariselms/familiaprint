import { CategoriesListType, CategoriesType } from "@/types/categories";
import { User } from "@/types/user";
import type { UserCredential } from "firebase/auth";

export interface LanguageContextType {
  language: string;

  setLanguage: React.Dispatch<React.SetStateAction<string>>;

  verifyLanguageFromLocalStorage: () => string;

  setLanguageAndLocalStorage: (lang: string) => string;
}

export interface StorageContextType {
  categories: CategoriesListType;

  setCategories: React.Dispatch<React.SetStateAction<CategoriesListType>>;

  getAllCategories: () => Promise<CategoriesListType | undefined>;

  category: CategoriesType | null;

  getCategoryById: (id: string) => Promise<CategoriesType | undefined>;

  setCategory: React.Dispatch<React.SetStateAction<CategoriesType | null>>;

  loadingCategories: boolean
}

export interface AuthContextType {
	user: any | null;
	createUser: (email: string, password: string) => Promise<UserCredential> | undefined;
  signInUser: (email: string, password: string) => Promise<UserCredential> | undefined;
  signOutUser: () => void;
  persistUser: () => void;
  authError: string | null;
}