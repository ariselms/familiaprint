"use client";
import { CategoriesListType, CategoriesType } from "@/types/categories";
import type { CategoriesContextType } from "@/types/contextTypes";
import React, { createContext, useState } from "react";

export const CategoriesContext = createContext<CategoriesContextType | null>(null);

export const CategoriesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<CategoriesListType>([]);

  const [category, setCategory] = useState<CategoriesType | null>(null);

  const [loadingCategories, setLoadingCategories] = useState<boolean>(true)

  // get all categories from firebase
  const getAllCategories = async () => {
    const data = await fetch("/api/categories");
    const response = await data.json();
    const categories = response.categories;
    if(categories){
      setCategories(categories);
      setLoadingCategories(false)
    }
    return categories;
  }

  // get firebase category by id
  const getCategoryById = async (id: string) => {
    const data = await fetch(`/api/categories/${id}`);
    const response = await data.json();
    const category = response.category;
    console.log(category)
    if(category){
      setCategory(category[0]);
      setLoadingCategories(false)
    }
    return category;
  }

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        getAllCategories,
        category,
        setCategory,
        getCategoryById,
        loadingCategories			}}>
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategoriesContext = () => {
  const categoriesContext = React.useContext(CategoriesContext);
  if (!categoriesContext) {
    throw new Error("useLanguage must be used within a CategoriesProvider");
  }
  return categoriesContext;
};