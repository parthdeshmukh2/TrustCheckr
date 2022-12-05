import React, { useState } from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";

const FlightCard = (elem, {returnDate}) => {
  // const [returnBox, setReturnBox] = useState(false);
console.log(returnDate, "whg");
  return (
    <Box
      w="90%"
      m="auto"
      bg="gray.300"
      rounded="xl"
      p="4"
      display="grid"
      mt="8"
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap="8"
    >
      <Box>
        <Image
          w="100%"
          h="250px"
          src="https://images.unsplash.com/photo-1628869071305-0d6771c1c0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwaWNlamV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </Box>

      <Box display="flex" flexDirection="column">
        <Box >
          
        <Text fontSize="xl" fontWeight="600" fontStyle="italic">
            Name:- {elem.name}
          </Text>
          
          <Text fontSize="xl" fontWeight="600" fontStyle="italic">
            {elem.originCity} ⇛ {elem.destinationCity}
          </Text>
          <Text fontSize="xl" fontWeight="600" fontStyle="italic">
            Departure Date:- {elem.departureDate}
          </Text>
          <Text fontSize="xl" fontWeight="600" fontStyle="italic">
            Return Date:- {returnDate}
          </Text>
          <Text fontSize="xl" fontWeight="600" fontStyle="italic">
            Departure Time:- {elem.departureTime}
          </Text>
          <Text fontSize="xl" fontWeight="600" fontStyle="italic">
            Arrival Time:- 10:00
          </Text>
          <Text fontSize="xl" fontWeight="600" fontStyle="italic">
            Price:- ₹10,000
          </Text>   
        </Box>
        
      </Box>

      <Box m="auto">
        <Button bg="green" color="white" _hover={{ bg: "black" }}>
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default FlightCard;
