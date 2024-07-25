import Image from 'next/image';
import styles from './Navbar.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <span className={styles.frame4}>
                <Image src='/Logos.png' alt='logo' width={114} height={35} />
                <ul className={styles.frame2}>
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
            <div className={styles.frame3}>
                <button id={styles.navbut1}>Volunteer</button>
                <button className='navbut2'>Donate</button>
            </div>
        </div>
    );
};

export default Navbar;
