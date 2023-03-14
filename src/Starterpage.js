import code from "./assets/code.jpg";
import Button from "./Button";
function StartPage() {
  return (
    <div className="defaultbody">
      <div className="startpage_img">
        <img src={code} alt="banner" />
      </div>
      <div className="startpage">
        <h1>wellcom to Django Course</h1>
        <p>
          When taking online courses, it is important to be effective in order
          to get the most out of the learning experience. There are a few things
          that can help make this happen: <br />
          1. Make a plan. Before starting the course, create a plan of what you
          want to achieve. This will help you stay organized and focused on the
          material. <br />
          2. Set realistic expectations. It is important to be realistic about
          your ability to learn online. Do not expect to be able to complete the
          course in one sitting, or without some difficulty. Take your time and
          work through the material step-by-step.
          <br /> 3. Use resources. There are many resources available to help
          you learn online, including books, websites, and video tutorials. Use
          these resources to help you learn more effectively and faster.
        </p>
        <div className="buttons-start">
          <Button name={"start"} />
        </div>
      </div>
    </div>
  );
}

export default StartPage;
