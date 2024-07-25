import styles from './Testimonials.module.css';
import Heading from '../common/Heading/Heading';
import TestimonialsApi from '../common/TestimonialsApi/TestimonialsApi';

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <Heading
        subHeading='Testimonials'
        heading='Check what our volunteers are saying'
        description='We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.'
      />
      <TestimonialsApi />
    </div>
  );
}
