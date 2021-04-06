export interface WrapperProps {
  padding?: boolean;
}

const Wrapper: React.FC<WrapperProps> = ({ children, padding = true }) => {
  return (
    <>
      <div
        style={{
          margin: "auto",
          width: "80%",
          paddingTop: `${padding ? "5rem" : "0rem"}`,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Wrapper;
