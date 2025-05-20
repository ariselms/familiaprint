"use client";
import { MaterialsListType, MaterialsType } from "@/types/materials";
import type { MaterialsContextType } from "@/types/contextTypes";
import React, { createContext, useState } from "react";

export const MaterialsContext = createContext<MaterialsContextType | null>(null);

export const MaterialsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [materials, setMaterials] = useState<MaterialsListType>([]);

  const [material, setMaterial] = useState<MaterialsType | null>(null);

  const [loadingMaterials, setLoadingMaterials] = useState<boolean>(true)

  // get all materials from firebase
  const getAllMaterials = async () => {
    const data = await fetch("/api/materials", {
      cache: "no-store",
    });
    const response = await data.json();
    const materials = response.data;
    if(materials){
      setMaterials(materials);
      setLoadingMaterials(false)
    }
    return materials;
  }

  // get firebase category by id
  const getMaterialById = async (id: string) => {
    const data = await fetch(`/api/materials/${id}`);
    const response = await data.json();
    const category = response.data;
    if(category){
      setMaterial(category[0]);
      setLoadingMaterials(false)
    }
    return category;
  }

  return (
    <MaterialsContext.Provider
      value={{
        materials,
        setMaterials,
        getAllMaterials,
        material,
        setMaterial,
        getMaterialById,
        loadingMaterials			}}>
      {children}
    </MaterialsContext.Provider>
  );
}

export const useMaterialsContext = () => {
  const materialsContext = React.useContext(MaterialsContext);
  if (!materialsContext) {
    throw new Error("useLanguage must be used within a MaterialsProvider");
  }
  return materialsContext;
};