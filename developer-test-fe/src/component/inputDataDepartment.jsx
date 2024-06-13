import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { createDepartment } from "../lib/api/call/department";
import { useNavigate } from "react-router-dom";
const InputDataDepartment = () => {
  const [nama, setNama] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDepartment = { nama_department: nama };
    const data = await createDepartment(newDepartment);
    setNama("");
    navigate("/input-jabatan");
  };

  return (
    <Box as="form" onSubmit={handleSubmit} className="faded">
      <FormControl id="nama">
        <FormLabel fontWeight={"bold"}>Nama Department</FormLabel>
        <Input
          border={"1px solid rgb(49, 151, 149)"}
          bg="gray.100"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </FormControl>
      <Button mt={6} colorScheme="teal" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default InputDataDepartment;
