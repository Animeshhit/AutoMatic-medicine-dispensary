import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import DoctorLogin from "./pages/DoctorLogin/DoctorLogin";
import DoctorRegister from "./pages/DoctorsRegister/DoctorRegister";
import FreshGen from "./pages/Generate/FreshGen";
import ReGen from "./pages/Generate/ReGen";
import { useState } from "react";
function App() {
  const [isDoctor, setIsDoctor] = useState(false);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/doctor/login" element={<DoctorLogin />} />
          <Route path="/auth/doctor/register" element={<DoctorRegister />} />
          {isDoctor ? (
            <Route path="/gen-new" element={<FreshGen />} />
          ) : (
            <Route path="/gen-new" element={<ReGen />} />
          )}
          <Route path="/gen-renew" element={<ReGen />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
