import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import InputDataKaryawanPage from "./pages/pageDataKaryawan";
import InputDataDepartmentPage from "./pages/pageDataDepartment";
import InputDataJabatanPage from "./pages/pageDataJabatan";
import TabelKaryawanPage from "./pages/pageTabelKaryawan";
import EditKaryawanPage from "./pages/editKaryawanPage";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/input-karyawan" />} />
          <Route path="/input-karyawan" element={<InputDataKaryawanPage />} />
          <Route
            path="/input-department"
            element={<InputDataDepartmentPage />}
          />
          <Route path="/input-jabatan" element={<InputDataJabatanPage />} />
          <Route path="/daftar-karyawan" element={<TabelKaryawanPage />} />
          <Route path="/edit-karyawan/:id" element={<EditKaryawanPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
