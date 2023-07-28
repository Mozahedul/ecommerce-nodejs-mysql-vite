import PropTypes from "prop-types";
import TopHeader from "../components/header/TopHeader";
import Footer from "./Footer";
import MidHeader from "../components/header/MidHeader";

const Header = ({ children }) => {
  return (
    <div>
      <TopHeader />
      <MidHeader />
      <div className="ml-24 mr-24">
        {children}
        <Footer />
      </div>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
