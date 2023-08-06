import PropTypes from "prop-types";
import TopHeader from "../components/header/TopHeader";
import Footer from "./Footer";
import MidHeader from "../components/header/MidHeader";
import BottomHeader from "./BottomHeader";
import MobileTopHeader from "../components/header/MobileTopHeader";

const Header = ({ children }) => {
  return (
    <div>
      <TopHeader />
      <MobileTopHeader />
      <MidHeader />
      <BottomHeader />
      {children}
      <Footer />
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
