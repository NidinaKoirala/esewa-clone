import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ServiceSection from "../components/ServiceSection";
import PartnerBanks from "../components/PartnerBanks";
import Footer from "../components/Footer";
import { FaTrophy, FaQrcode, FaGraduationCap, FaPlane, FaHospitalAlt } from "react-icons/fa";

export default function HomePage() {
  const popularServices = [
    { name: "Participate & Win", icon: <FaTrophy /> },
    { name: "Business QR Request", icon: <FaQrcode /> },
    { name: "IOE Entrance Exam", icon: <FaGraduationCap /> },
    { name: "Nepal Airlines", icon: <FaPlane /> },
  ];

  const newServices = [
    { name: "Sukraraj Hospital", icon: <FaHospitalAlt /> },
    { name: "eSpeaker Request", icon: <FaQrcode /> },
  ];

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container mx-auto p-6">
        <Categories />
        <ServiceSection title="Popular Services" services={popularServices} />
        <ServiceSection title="New Services" services={newServices} />
        <PartnerBanks />
      </div>
      <Footer />
    </div>
  );
}
