import Profile from "./profile";

const Coursetitle = ({ coursetitle }) => {
  return (
    <div className="topic">
      <h3>
        {coursetitle}
        <span id="new">NEW</span>
      </h3>
      <p>
        Django is a high-level Python web framework that encourages rapid
        development and clean, pragmatic design. Built by experienced
        developers, it takes care of much of the hassle of web development, so
        you can focus on writing your app without needing to reinvent the wheel.
        It's free and open source.
      </p>
      <div className="profilee">
        <span id="teacherprofile">
          <p>By</p>
          <Profile />
        </span>
      </div>
    </div>
  );
};

export default Coursetitle;
