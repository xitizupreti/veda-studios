import Image from 'next/image';
import styles from './Navbar.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <span className={styles.navList}>
        <Image src='/Logos.png' alt='logo' width={114} height={35} />
        <ul className={styles.navListol}>
          <li>
            Campaigns & Topics
            <KeyboardArrowDownIcon />
          </li>
          <li>
            Animals
            <KeyboardArrowDownIcon />
          </li>
          <li>
            About us
            <KeyboardArrowDownIcon />
          </li>
          <li>Contact</li>
        </ul>
      </span>
      <div className={styles.navButtons}>
        <button id={styles.navButton1}>Volunteer</button>
        <button className='navButton2'>Donate</button>
      </div>
    </div>
  );
};

export default Navbar;
