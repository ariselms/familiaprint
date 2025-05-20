"use client";
import { ServiceListType, ServiceType } from "@/types/services";
import type { ServicesContextType } from "@/types/contextTypes";
import React, { createContext, useState } from "react";

export const ServicesContext = createContext<ServicesContextType | null>(null);

export const ServicesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [services, setServices] = useState<ServiceListType>([]);

  const [service, setService] = useState<ServiceType | null>(null);

  const [loadingServices, setLoadingServices] = useState<boolean>(true)

  // get all services from firebase
  const getAllServices = async () => {
    const data = await fetch("/api/services", {
      cache: "no-store",
    });
    const response = await data.json();
    const services = response.data;
    if(services){
      setServices(services);
      setLoadingServices(false)
    }
    return services;
  }

  // get firebase category by id
  const getServiceById = async (id: string) => {
    const data = await fetch(`/api/services/${id}`);
    const response = await data.json();
    const category = response.data;
    if(category){
      setService(category[0]);
      setLoadingServices(false)
    }
    return category;
  }

  return (
    <ServicesContext.Provider
      value={{
        services,
        setServices,
        getAllServices,
        service,
        setService,
        getServiceById,
        loadingServices			}}>
      {children}
    </ServicesContext.Provider>
  );
}

export const useServicesContext = () => {
  const servicesContext = React.useContext(ServicesContext);
  if (!servicesContext) {
		throw new Error("useLanguage must be used within a ServiceProvider");
	}
  return servicesContext;
};