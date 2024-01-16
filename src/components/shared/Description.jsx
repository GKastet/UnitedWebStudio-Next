import styles from "./description.module.css";

const SectionDescription = ({children}) => {
    return <p className={styles.description}>{children}</p>;
  }


export default SectionDescription;