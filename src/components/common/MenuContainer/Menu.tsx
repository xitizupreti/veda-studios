import styles from './Menu.module.css';

interface MenuProps {
  heading: string;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
}

const MenuProps = ({ heading, list1, list2, list3, list4 }: MenuProps) => {
  return (
    <div className={styles.menu}>
      <span
        style={{
          textTransform: 'uppercase',
          display: 'flex',
          height: '23px',
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '23.4px',
          color: 'rgba(53,51,51,1)',
          marginBottom: '24px',
        }}
      >
        {heading}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <span className={styles.Li}>{list1}</span>
        <span className={styles.Li}>{list2}</span>
        <span className={styles.Li}>{list3}</span>
        <span className={styles.Li}>{list4}</span>
      </div>
    </div>
  );
};

export default MenuProps;
