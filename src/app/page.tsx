import ServicesCategoriesList from "@/components/Categories";
import Jumbotron from "@/components/Jumbotron";

export default async function Home() {

  return (
		<>
			<Jumbotron />
      <ServicesCategoriesList/>
		</>
	);
}
