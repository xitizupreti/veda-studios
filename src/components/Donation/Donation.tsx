'use client';
import Image from 'next/image';
import styles from './Donation.module.css';
import Heading from '../common/Heading/Heading';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProgressBar from '@ramonak/react-progress-bar';
import Button from '../common/Button';

export default function Donation() {
  return (
    <div className={styles.donation}>
      <div style={{ position: 'relative' }}>
        <Image
          src='/donation.png'
          alt='donate dog'
          width={452}
          height={669}
          style={{ borderRadius: '8px' }}
          className={styles.image}
        ></Image>
        <Image
          width={79}
          height={187}
          src='/logo.png'
          alt='logo'
          style={{
            borderRadius: '8px',
            position: 'absolute',
            bottom: '25px',
            right: '-35px',
          }}
        ></Image>
      </div>

      <div className={styles.donationBottom}>
        <Heading
          textAlignment='left'
          subHeading='A Help to those who need it'
          heading='Transform lives with donations'
          description='Your donation can save lives. Help us provide care and find loving homes for rescued animals. Every contribution counts. Donate now!'
        />
        <div className={styles.progressBarContainer}>
          <ProgressBar
            completed={60}
            customLabel='60%'
            bgColor='rgba(139, 69, 19, 1)'
            height='8px'
            // width=''
            isLabelVisible={false}
          />
          <div
            style={{
              justifyContent: 'space-between',
              marginTop: '15px',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '25.2px',
                letterSpacing: '0.15em',
                textAlign: 'left',
              }}
            >
              Goal : $1340
            </span>
            <span
              style={{
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '25.2px',
                letterSpacing: '0.15em',
                float: 'right',
              }}
            >
              Raised : $800
            </span>
          </div>
          <div style={{ marginTop: '25px' }}>
            <button
              disabled
              style={{
                width: '60px',
                height: '56px',
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '24px',
                color: 'rgba(105, 111, 140, 1)',
              }}
            >
              $
            </button>
            <input
              placeholder='10.00'
              style={{
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '24px',
                width: '150px',
                height: '56px',
                padding: '16px,24px,16px,24px',
                border: '1px solid rgba(230, 230, 230, 1)',
                color: 'rgba(105, 111, 140, 1)',
              }}
            ></input>
          </div>
          <div style={{ marginTop: '25px' }}></div>
        </div>
        <div style={{ width: '90%' }}>
          <div>
            <Button text='$10.00' />
            <Button text='$25.00' />
            <Button text='$50.00' />
            <Button text='$100.00' />
            <Button text='$250.00' />
          </div>
          <button
            className='navButton2'
            style={{
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '24px',
              marginTop: '50px',
            }}
          >
            Donate Now
            <ArrowForwardIcon
              style={{
                height: '16px',
                width: '16px',
                marginLeft: '8px',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
