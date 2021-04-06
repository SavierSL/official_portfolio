export interface ProjectComponentProps {
  title: string;
  description: string;
  imageName: string;
}

const ProjectComponent: React.SFC<ProjectComponentProps> = ({
  title,
  description,
  imageName,
}) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <img src={`/${imageName}.png`} alt="" style={{ height: "33rem" }} />
        <p style={{ fontSize: "1.5rem" }}>{description}</p>
      </div>
    </>
  );
};

export default ProjectComponent;
