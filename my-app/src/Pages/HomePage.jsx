import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Form from "../Components/Form";
import Navbar from "../Components/Navbar";
import axios from "axios";
import FlightCard from "../Components/FlightCard";
import Footer from "../Components/Footer";

const HomePage = () => {
  const [currentCity, setCurrentCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passenger, setPessenger] = useState("");

  const [flightData, setFlightData] = useState([]);
  const [data, setData] = useState(false);
  

  const handleSearch = () => {
    setData(true);
    console.log(currentCity, destinationCity, returnDate);
    console.log(flightData);
  };

  const getData = () => {
    axios
      .get(
        `http://localhost:8080/results?originCity=${currentCity}&destinationCity=${destinationCity}&=departureDate${departureDate}`
      )
      .then((res) => setFlightData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (data) {
      getData();
    }
    setData(false);
  }, [handleSearch]);

  return (
    <Box>
      <Navbar/>

      <Form
        setCurrentCity={setCurrentCity}
        setDestinationCity={setDestinationCity}
        setDepartureDate={setDepartureDate}
        setReturnDate={setReturnDate}
        setPessenger={setPessenger}
        handleSearch={handleSearch}
      />
      <Box w="90%" m="auto" display="flex" flexDirection="column" mt="16">
        {flightData.length > 0 &&
          flightData.map((elem) => (
            <FlightCard key={elem.id} {...elem} returnDate={returnDate} />
          ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default HomePage;
