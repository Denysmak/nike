import './style.css';
import { IoIosSearch } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { HiOutlineUser } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import Logo from '../../assets/logoNike (2).png';



export default function Header({ naoexibir }) {
  return (
    <>
      <nav className='header'>
        <div className='logo'>
          <img src={Logo} className='img-logo' alt='logo' />
        </div>


        <div className='infos'>
          <p><IoIosSearch/></p>
          <p><HiOutlineUser style={{ marginRight: 8 }} /></p>
          <p><MdOutlineShoppingBag style={{ marginRight: 8 }} /></p>
          <p><FaBars style={{ marginRight: 8 }} /></p>

        </div>
      </nav>
    </>
  );
}