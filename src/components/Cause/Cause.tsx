import styles from './Cause.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Heading from '../common/Heading/Heading';
import Card from '../common/Card/Card';

export default function Cause() {
  return (
    <div className={styles.cause}>
      <Heading
        subHeading='A Help to those who need it'
        heading='Each donation is an essential'
        description='Each donation is an essential'
      />
      <div className={styles.causeContainer}>
        <Card
          image='/c1.png'
          heading='New chance for animals'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <Card
          image='/c2.png'
          heading='Help the eco system'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
        <Card
          image='/c3.png'
          heading='Help the eco system'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        />
      </div>
      <button
        className='navButton2'
        style={{
          height: '56px',
          width: '242px',
          fontSize: '18px',
          fontWeight: '400',
          marginBottom: '2rem',
          padding: '16px 40px 16px 40px',
        }}
      >
        View All Cause
        <ArrowForwardIcon
          style={{ height: '16px', width: '18px', marginLeft: '8px' }}
        />
      </button>
    </div>
  );
}
