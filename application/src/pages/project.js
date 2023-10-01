import "../css/project.css";

const Project = () => {
  return (
    <div className="projectBody">
      <div className="clouds">
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>

      <div className="path">
        <div className="stop">
          <img src="/treehouse.png" />
          <div className="pole">
            <div className="box">this is some Content</div>
          </div>
        </div>
        <div className="stop"></div>
        <div className="stop"></div>
      </div>

      <div className="ground">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default Project;
