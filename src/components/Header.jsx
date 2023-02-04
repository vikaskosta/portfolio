import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen}/>
      </nav>
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`navPhone ${menuOpen?"navPhoneComes":""}`}>
      <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  );
};

const NavContent = ({setMenuOpen}) => (
  <>
    <h2><img src={logo} alt="logo" /></h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
      <a onClick={() => setMenuOpen(false)} href="#work">Work</a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">Experiance</a>
      <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
      <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
    </div>
    <a href="mailto:vikas.kosta741@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
