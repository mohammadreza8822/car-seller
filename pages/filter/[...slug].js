import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarsList from "../../components/templates/CarList";

function FilterCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filteredData = carsData.filter(
    (car) => min < car.price && car.price < max
  );

  if (!filteredData.length) {
    return <h3>Not Found</h3>;
  }
  return <CarsList data={filteredData} />;
}

export default FilterCars;
