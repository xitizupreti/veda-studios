import styles from './Event.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Heading from '../common/Heading/Heading';
import ECardProps from '../common/EventCard/EventCard';
export default function Event() {
  return (
    <div className={styles.events} style={{ padding: '2rem 0' }}>
      <Heading
        subHeading='Calender'
        heading='Event Schedule'
        description='We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.'
      />
      <div className={styles.eventsCardContainer}>
        <ECardProps
          day='08'
          date='June'
          heading='Disaster Relief for Animals'
        />
        <ECardProps day='12' date='June' heading='Rapid Response for Animals' />
        <ECardProps
          day='17'
          date='June'
          heading='Disaster Relief for Animals'
        />
      </div>
      <button
        className='navButton2'
        style={{
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '24px',
        }}
      >
        View All
        <ArrowForwardIcon
          style={{ height: '16px', width: '16px', marginLeft: '8px' }}
        />
      </button>
    </div>
  );
}
