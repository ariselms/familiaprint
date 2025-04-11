"use client";

import { useEffect } from "react";
import { useStorageContext } from "@/context/storageContext";
import { useLanguageContext } from "@/context/languageContext";
import { useParams } from "next/navigation";
import ServiceBanner from "@/components/ServiceBanner";
import Container from "@/components/layout/Container";
import Spinner from "@/components/Spinner";

const ServicesPage = () => {
  const { id } = useParams();
  const storageContext = useStorageContext();
  const {language} = useLanguageContext();

  useEffect(() => {
    storageContext?.getCategoryById(String(id));
  }, [id]);

  if (storageContext?.loadingCategories) {
    return <Spinner />;
  }

  return (
    <main>
      <ServiceBanner
        category={
          language === "es"
            ? storageContext?.category?.spName ?? ""
            : storageContext?.category?.enName ?? ""
        }
      />

      <Container>
        <section className="py-8 text-blue-200">
          <h2 className="text-2xl font-bold mb-8 text-center mx-auto">
            {language === "es"
              ? `¿Qué son ${storageContext?.category?.spName.toLocaleLowerCase()}?`
              : `What are ${storageContext?.category?.enName.toLocaleLowerCase()}?`}
          </h2>
          <p className="text-lg max-w-[80ch] mx-auto">
            {language === "es"
              ? storageContext?.category?.spDescription
              : storageContext?.category?.enDescription}
          </p>
        </section>
      </Container>
    </main>
  );
};

export default ServicesPage;
