import PropTypes from 'prop-types';
import TopHeader from '../components/header/TopHeader';
import Footer from './Footer';

const Header = ({ children }) => {
  return (
    <>
      <TopHeader />
      {children}
      <Footer />
    </>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
