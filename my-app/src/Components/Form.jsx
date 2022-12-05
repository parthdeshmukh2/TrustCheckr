import { Box, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const Form = ({
  setCurrentCity,
  setDestinationCity,
  setDepartureDate,
  setReturnDate,
  setPessenger,
  handleSearch,
}) => {
  const [handleTwoWay, setHAndleTwoWay] = useState(false);
  return (
    <Box bg="gray.300" w="90%" m="auto" mt="16" p="4" rounded="xl">
      <Box mb="8">
        <Button mr="4" onClick={() => setHAndleTwoWay(false)}>
          OneWay
        </Button>
        <Button onClick={() => setHAndleTwoWay(true)}>Two Way</Button>
      </Box>
      <Box
        //   border="1px solid red"
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(5,1fr)",
        }}
        gap="8"
      >
      
        <Input
          border="1px solid black"
          type="text"
          placeholder="Enter Origin City"
          onChange={(e) => setCurrentCity(e.target.value)}
         
        />
        <Input
          border="1px solid black"
          type="text"
          placeholder="Enter Destination City"
          onChange={(e) => setDestinationCity(e.target.value)}
        />
        <Input
          border="1px solid black"
          type="text"
          placeholder="Enter Departure Date"
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        {handleTwoWay && (
          <Input
            border="1px solid black"
            type="text"
            placeholder="Enter Return Date"
            onChange={(e) => setReturnDate(e.target.value)}
          />
        )}

        <Input
          border="1px solid black"
          type="number"
          placeholder="Enter Passenger"
          onChange={(e) => setPessenger(e.target.value)}
        />
      </Box>
      <Button bg="green" color="white" mt="8" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default Form;
