import React, { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

const HomePage: React.FC = () => {
  const [cars, setCars] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Container>
      <Typography variant="h2">BMW Cars</Typography>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
            {car.series} - {car.model} - ${car.price}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default HomePage;
