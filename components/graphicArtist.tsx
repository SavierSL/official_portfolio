export interface GraphicArtistProps {}

const GraphicArtist: React.SFC<GraphicArtistProps> = () => {
  return (
    <>
      <div
        style={{
          height: "120vh",
          overflow: "hidden",
        }}
      >
        <h1>GRAPHICS SECTION</h1>
        <div>
          {" "}
          <img
            src="/iso3.jpg"
            alt="Picture of the author"
            style={{ height: "30rem" }}
          />
          <img
            src="/zeus-01.jpg"
            alt="Picture of the author"
            style={{ height: "30rem" }}
          />
          <img
            src="/quinn.png"
            alt="Picture of the author"
            style={{ height: "30rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default GraphicArtist;
