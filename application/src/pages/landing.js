import { Sleep } from "../components/function";
import "../css/landing.css";
import { useEffect, useState } from "react";

const Landing = () => {
  const sal = "hi, i'm";
  const name = "saurabh yadav";
  const intro = "I am a passionate full-stack developer I am a passionate full-stack developer I am a passionate full-stack developer"

  const [line1, setline1] = useState("");
  const [line2, setline2] = useState("");
  const [line3, setline3] = useState("");

  const typeline1 = async () => {
    const sleepTime = 200;
    setline1("");
    setline2("");
    setline3("");
    await Sleep(sleepTime);
    for (var i = 0; i < sal.length; i++) {
      setline1((prevLine) => prevLine + sal[i]);
      await Sleep(sleepTime);
    }
  };

  const typeline2 = async () => {
    let sleepTime = 150;
    setline2("");
    setline3("");
    await Sleep(sleepTime);
    for (var i = 0; i < name.length; i++) {
      setline2((prevLine) => prevLine + name[i]);
      await Sleep(sleepTime);
    }
  };

  const typeline3 = async () => {
    let sleepTime = 100;
    setline3("");
    await Sleep(sleepTime);
    for (var i = 0; i < intro.length; i++) {
      setline3((prevLine) => prevLine + intro[i]);
      await Sleep(sleepTime);
    }
  };

  const typewriter = async () => {
    await typeline1();
    await typeline2();
    await typeline3();
  };

  useEffect(() => {
    typewriter();
  }, []);

  return (
    <div className="landingPage">
      <div className="leftCircle">
        <div style={{ width: "80%" }}>
          <div className="intro">
            <span className="line1">{line1}</span>
            <span className="line2">{line2}</span>
            <span className="line3">{line3}</span>
          </div>
          <a href="#project" className="cta" >See my story</a>
        </div>
        <div></div>
      </div>
      <div className="rightCircle">
        <img src="/nobgimg.png" className="bgImg" />
      </div>
    </div>
  );
};

export default Landing;
