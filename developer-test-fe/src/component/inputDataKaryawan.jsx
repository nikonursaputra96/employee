import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { getDepartments } from "../lib/api/call/department";
import {
  createKaryawan,
  getKaryawanById,
  updateKaryawan,
} from "../lib/api/call/karyawan";
import { getJabatanByDepartment } from "../lib/api/call/jabatan";
import { useParams, useNavigate } from "react-router-dom";

const InputDataKaryawan = ({ karyawan, onSubmit }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [tanggal_lahir, setTanggalLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [departments, setDepartments] = useState([]);
  const [jabatan, setJabatan] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedJabatan, setSelectedJabatan] = useState("");

  useEffect(() => {
    const fetchDepartments = async () => {
      const data = await getDepartments();
      setDepartments(data);
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchJabatan = async () => {
      if (selectedDepartment) {
        const data = await getJabatanByDepartment(selectedDepartment);
        setJabatan(data);
      }
    };

    fetchJabatan();
  }, [selectedDepartment]);

  useEffect(() => {
    const fetchKaryawan = async () => {
      if (id) {
        const data = await getKaryawanById(id);
        setName(data.name);
        setAge(data.age);
        setGender(data.gender);
        setTanggalLahir(data.tanggal_lahir);
        setAlamat(data.alamat);
        setSelectedDepartment(data.id_department);
        setSelectedJabatan(data.id_jabatan);
      }
    };

    fetchKaryawan();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newKaryawan = {
      name,
      age,
      gender,
      tanggal_lahir,
      alamat,
      id_jabatan: selectedJabatan,
    };

    if (id) {
      await updateKaryawan(id, newKaryawan);
    } else {
      await createKaryawan(newKaryawan);
    }
    console.log("Data saved:", newKaryawan);

    setName("");
    setAge("");
    setGender("");
    setTanggalLahir("");
    setAlamat("");
    setSelectedDepartment("");
    setSelectedJabatan("");
    navigate("/daftar-karyawan");
  };

  return (
    <Box as="form" onSubmit={handleSubmit} className="faded">
      <FormControl id="name">
        <FormLabel fontWeight={"bold"}>Nama</FormLabel>
        <Input
          border={"1px solid rgb(49, 151, 149)"}
          bg="gray.100"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl id="age" mt={4}>
        <FormLabel fontWeight={"bold"}>Usia</FormLabel>
        <Input
          border={"1px solid rgb(49, 151, 149)"}
          bg="gray.100"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </FormControl>

      <FormControl id="gender" mt={4}>
        <FormLabel fontWeight="bold">Jenis Kelamin</FormLabel>
        <RadioGroup value={gender} onChange={setGender}>
          <Stack direction="row" spacing={4}>
            <Radio value="L" colorScheme="teal" size="md">
              Laki-laki
            </Radio>
            <Radio value="P" colorScheme="pink" size="md">
              Perempuan
            </Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl id="tanggal_lahir" mt={4}>
        <FormLabel fontWeight={"bold"}>Tanggal Lahir</FormLabel>
        <Input
          border={"1px solid rgb(49, 151, 149)"}
          bg="gray.100"
          type="date"
          value={tanggal_lahir}
          onChange={(e) => setTanggalLahir(e.target.value)}
        />
      </FormControl>

      <FormControl id="alamat" mt={4}>
        <FormLabel fontWeight={"bold"}>Alamat</FormLabel>
        <Input
          border={"1px solid rgb(49, 151, 149)"}
          bg="gray.100"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
      </FormControl>

      <FormControl id="department" mt={4}>
        <FormLabel fontWeight={"bold"}>Department</FormLabel>
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

      <FormControl id="jabatan" mt={4}>
        <FormLabel fontWeight={"bold"}>Jabatan</FormLabel>
        <Select
          border={"1px solid rgb(49, 151, 149)"}
          bg="gray.100"
          value={selectedJabatan}
          onChange={(e) => setSelectedJabatan(e.target.value)}
        >
          <option value="">Pilih Jabatan</option>
          {jabatan.map((job) => (
            <option key={job.id} value={job.id}>
              {job.nama_jabatan}
            </option>
          ))}
        </Select>
      </FormControl>
      <Box
        display={"flex"}
        w={"100%"}
        justifyContent={"end"}
        alignItems={"end"}
      >
        <Button mt={6} colorScheme="teal" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default InputDataKaryawan;
