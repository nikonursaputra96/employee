import React, { useState, useEffect } from "react";
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getKaryawan, deleteKaryawan } from "../lib/api/call/karyawan";

const TabelKaryawan = () => {
  const [karyawan, setKaryawan] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKaryawan = async () => {
      const data = await getKaryawan();
      setKaryawan(data);
    };

    fetchKaryawan();
  }, []);

  const handleDelete = async (id) => {
    await deleteKaryawan(id);
    setKaryawan(karyawan.filter((k) => k.id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/edit-karyawan/${id}`);
  };

  return (
    <Box>
      <Table variant="striped" colorScheme="teal" className="faded">
        <Thead>
          <Tr>
            <Th>Nama</Th>
            <Th>Usia</Th>
            <Th>Gender</Th>
            <Th>Tanggal Lahir</Th>
            <Th>Alamat</Th>
            <Th>Jabatan</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {karyawan.map((k) => (
            <Tr key={k.id}>
              <Td className="BTT">{k.name}</Td>
              <Td className="BTT">{k.age}</Td>
              <Td className="BTT">{k.gender}</Td>
              <Td className="BTT">{k.tanggal_lahir}</Td>
              <Td className="BTT">{k.alamat}</Td>
              <Td className="BTT">{k.jabatan && k.jabatan.nama_jabatan}</Td>
              <Td className="BTT">
                <Button
                  mr={2}
                  colorScheme="blue"
                  onClick={() => handleEdit(k.id)}
                >
                  Edit
                </Button>
                <Button colorScheme="red" onClick={() => handleDelete(k.id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TabelKaryawan;
