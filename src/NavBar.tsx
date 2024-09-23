import styled from 'styled-components';

function NavBar() {
  return (
    <NavBarStyle>
      <div>
        <a href='#'>
          <img src='./images/logo.jpg' alt='logo' />
        </a>
      </div>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
        <li>
          <a href='#'>FAQ</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
      </ul>
    </NavBarStyle>
  );
}

export default NavBar;

const NavBarStyle = styled.nav`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #000000df;
  align-items: center;
  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }
  ul {
    display: flex;
    padding: 5px;
    list-style-type: none;
    li {
      margin-right: 2rem;
      a {
        text-decoration: none;
        color: aliceblue;
      }
    }
  }
`;
