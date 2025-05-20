import { MaterialsListType, MaterialsType } from "@/types/materials";
import { ServiceListType, ServiceType } from "@/types/services";

export interface MaterialsContextType {
	materials: MaterialsListType;

	setMaterials: React.Dispatch<React.SetStateAction<MaterialsListType>>;

	getAllMaterials: () => Promise<MaterialsListType | undefined>;

	material: MaterialsType | null;

	getMaterialById: (id: string) => Promise<MaterialsType | undefined>;

	setMaterial: React.Dispatch<React.SetStateAction<MaterialsType | null>>;

	loadingMaterials: boolean;
}

export interface ServicesContextType {
	services: ServiceListType;

	setServices: React.Dispatch<React.SetStateAction<ServiceListType>>;

	getAllServices: () => Promise<ServiceListType | undefined>;

	service: ServiceType | null;

	getServiceById: (id: string) => Promise<ServiceType | undefined>;

	setService: React.Dispatch<React.SetStateAction<ServiceType | null>>;

	loadingServices: boolean;
}

export interface LanguageContextType {
  language: string;

  setLanguage: React.Dispatch<React.SetStateAction<string>>;

  verifyLanguageFromLocalStorage: () => string;

  setLanguageAndLocalStorage: (lang: string) => any;
}

export interface StorageContextType {
  categories: MaterialsListType;

  setCategories: React.Dispatch<React.SetStateAction<MaterialsListType>>;

  getAllMaterials: () => Promise<MaterialsListType | undefined>;

  category: MaterialsType | null;

  getMaterialById: (id: string) => Promise<MaterialsType | undefined>;

  setCategory: React.Dispatch<React.SetStateAction<MaterialsType | null>>;

  loadingCategories: boolean
}

export interface AuthContextType {
	user: any | null;
	signOutUser: () => void;
	persistUser: () => Promise<void>;
}