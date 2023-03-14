const Tables = ({ courseoutline }) => {
  return (
    <div className="tables">
      <table>
        <tr>
          <th>Course details</th>
        </tr>
        {courseoutline.map((course) => (
          <tr>
            <td>{course.course_module_name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Tables;
