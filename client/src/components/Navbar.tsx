import Button from 'components/Button';
import styled from 'styled-components';
import { auth } from '../middleware/base';
import logo from '../assets/logo.png';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: hsl(240, 2%, 11%);

  img {
    margin: 2px 0px 0px 15px;
    height: 75%;
    width: auto;
  }

  .logout-btn {
    margin-right: 20px;
    margin-left: auto;
  }
`;

const Navbar = () => (
  <StyledNavbar className="mb-5">
    <img src={logo} alt="Daily Checking Logo" />
    <Button type="button" onClick={() => auth.signOut()} className="logout-btn">
      Sign Out
    </Button>
  </StyledNavbar>
);

export default Navbar;
