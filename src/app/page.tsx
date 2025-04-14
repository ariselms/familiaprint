import ServicesCategoriesList from "@/components/Categories";
import Jumbotron from "@/components/Jumbotron";
import MainFull from "@/components/layout/ContainerFull";

export default function Home() {
  return (
      <MainFull>
        <Jumbotron />
        <ServicesCategoriesList />
      </MainFull>
  );
}
