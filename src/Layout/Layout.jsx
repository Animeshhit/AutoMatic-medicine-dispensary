import Navbar from "../components/Navbar";
import Footer from "../components/footer/footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
