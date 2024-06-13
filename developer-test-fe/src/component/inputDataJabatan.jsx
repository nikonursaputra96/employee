import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { getDepartments } from "../lib/api/call/department";
import { createJabatan } from "../lib/api/call/jabatan";
import { useNavigate } from "react-router-dom";

const InputDataJabatan = () => {
  const [nama, setNama] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartments = async () => {
      const data = await getDepartments();
      setDepartments(data);
    };

    fetchDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newJabatan = {
      nama_jabatan: nama,
      id_department: selectedDepartment,
    };
    const data = await createJabatan(newJabatan);
    console.log("Data saved:", data);
    setNama("");
    setSelectedDepartment("");
    navigate("/input-karyawan");
  };

  return (
    <Box as="form" onSubmit={handleSubmit} className="faded">
      <FormControl id="nama">
        <FormLabel>Nama Jabatan</FormLabel>
        <Input
          border={"1px solid rgb(49, 151, 149)"}
          bg="gray.100"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </FormControl>

      <FormControl id="department" mt={4}>
        <FormLabel>Department</FormLabel>
        <Select
          border={"1px solid rgb(49, 151, 149)"}
          bg="gray.100"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="">Pilih Department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.nama_department}
            </option>
          ))}
        </Select>
      </FormControl>

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default InputDataJabatan;
