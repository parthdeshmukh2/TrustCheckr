import React from "react";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";



const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            {" "}
            <Text fontSize="xl" fontStyle="italic" fontWeight="800">
              TrustCheckr Flights
            </Text>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
