import { useRouter } from "next/router";

import CarDetail from "@/components/templates/CarDetail";
import carsData from "@/data/carsData";

function CarDetails() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetails = carsData[carId - 1];

  return <CarDetail {...carDetails} />;
}

export default CarDetails;
