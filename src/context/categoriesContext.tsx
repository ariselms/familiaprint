"use client";
import { MaterialsListType, MaterialsType } from "@/types/categories";
import type { CategoriesContextType } from "@/types/contextTypes";
import React, { createContext, useState } from "react";

export const CategoriesContext = createContext<CategoriesContextType | null>(null);

export const CategoriesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<MaterialsListType>([]);

  const [category, setCategory] = useState<MaterialsType | null>(null);

  const [loadingCategories, setLoadingCategories] = useState<boolean>(true)

  // get all categories from firebase
  const getAllMaterials = async () => {
    const data = await fetch("/api/materials", {
      cache: "no-store",
    });
    const response = await data.json();
    const categories = response.data;
    if(categories){
      setCategories(categories);
      setLoadingCategories(false)
    }
    return categories;
  }

  // get firebase category by id
  const getMaterialById = async (id: string) => {
    const data = await fetch(`/api/materials/${id}`);
    const response = await data.json();
    const category = response.data;
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
        getAllMaterials,
        category,
        setCategory,
        getMaterialById,
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