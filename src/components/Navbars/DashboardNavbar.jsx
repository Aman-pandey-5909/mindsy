import mindsy from "../../assets/mindsylogo.png";

const DashboardNavbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 px-10 bg-navbar flex justify-center items-center py-2">
       <img src={mindsy} alt="mindsy logo" />
    </nav>
  );
};

export default DashboardNavbar;
