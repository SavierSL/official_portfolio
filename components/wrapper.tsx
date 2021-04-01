export interface WrapperProps {}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: "auto",
          width: "80%",
          paddingTop: "5rem",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Wrapper;
