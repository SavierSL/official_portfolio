import MainContainer from "../components/mainContainer";
import styles from "../styles/main.module.scss";
export interface IndexProps {
  props: any;
}

const Index: React.FC<IndexProps> = (props) => {
  return (
    <>
      <MainContainer {...props}>
        <h1 className={styles.primaryHeading}>About</h1>
      </MainContainer>
    </>
  );
};

export default Index;
