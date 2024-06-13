// import React, { useState } from "react";
// import {
//   Button,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   Input,
//   Flex,
//   Text,
//   Divider,
// } from "@chakra-ui/react";

// const EditModal = ({ karyawan, setEditedKaryawan }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleUpdateKaryawan = async (id, newData) => {
//     // Logika update karyawan
//     console.log("Update karyawan:", id, newData);
//     setIsOpen(false);
//     setEditedKaryawan(null);
//   };

//   return (
//     <>
//       <Button
//         size={"sm"}
//         textAlign="center"
//         border="2px solid white"
//         onClick={() => setIsOpen(true)}
//       >
//         Edit Karyawan
//       </Button>

//       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Edit Karyawan</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={5}>
//             <Flex flexDir="column">
//               <Text fontSize="15px" color="grey" fontWeight="bold" ml={3}>
//                 Name
//               </Text>
//               <Input
//                 type="text"
//                 border="none"
//                 name="fullname"
//                 size="md"
//                 placeholder={`${karyawan?.name}`}
//                 _placeholder={{ color: "white" }}
//               />
//               {/* Add other input fields here */}
//             </Flex>
//             <Divider borderBottom="1px solid grey" mt={5} />
//             <Flex justifyContent="flex-end" mt={5}>
//               <Button
//                 fontSize="14px"
//                 w="63px"
//                 h="33px"
//                 ml="20px"
//                 onClick={() => handleUpdateKaryawan(karyawan?.id /* newData */)}
//                 _hover={{ bg: "blue.500" }}
//               >
//                 Save
//               </Button>
//             </Flex>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default EditModal;
