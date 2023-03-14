function Individualgrade({ courseoutlineid, grade, allcourseoutline }) {
  const name = allcourseoutline.find((cou) => cou.id == courseoutlineid);
  console.log("sss", name);
  return (
    <div>
      {name.course_module_name}{" "}
      ------------------------------------------------------{grade}
    </div>
  );
}

export default Individualgrade;
