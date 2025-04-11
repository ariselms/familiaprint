import ServicesCategoriesList from "@/components/Categories";
import Jumbotron from "@/components/Jumbotron";
import MainFull from "@/components/layout/ContainerFull";
// import { HorizontalGradientLogo } from "@/components/svg/Icons";

export default function Home() {
  return (
      <MainFull>
        <Jumbotron />
        <ServicesCategoriesList />
      </MainFull>
  );
}
