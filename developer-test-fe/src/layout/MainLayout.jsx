import React from "react";
import { Box, Heading, Flex, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <Box width={"100%"} className="roboto-regular">
      <Flex
        justifyContent={"center"}
        className="nt nav"
        alignItems={"center"}
        textAlign={"center"}
      >
        <Box p={4} justifyContent={"space-between"}>
          <Box>
            <Heading as="h1" mb={4} className="typewriter">
              Manajemen Karyawan
            </Heading>
          </Box>
          <Box>
            <Flex
              gap={4}
              color={"teal.500"}
              fontWeight={"bold"}
              fontSize={"lg"}
            >
              <Box>
                <Link to="/input-karyawan" className="h">
                  Input Karyawan
                </Link>
              </Box>
              <Box>
                <Link to="/input-department" className="h">
                  Input Department
                </Link>
              </Box>
              <Box></Box>
              <Link to="/input-jabatan" className="h">
                Input Jabatan
              </Link>
              <Link to="/daftar-karyawan" className="h">
                Daftar Karyawan
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Box px={"50px"} pb={"15vh"}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
