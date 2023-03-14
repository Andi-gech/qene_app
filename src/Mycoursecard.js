import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { useQuery } from "react-query";
import Profile from "./profile";
import useIndividualcoursehook from "./useIndividualcoursehook";
import useProfilehook from "./useProfiledatahook";
import useUserhook from "./useUser";

function MycourseCard({ courseid }) {
  const { data: course } = useIndividualcoursehook(courseid);

  const teacherid = course?.Teacher;

  const { data, isError, error, isFetching, refech } =
    useProfilehook(teacherid);

  const userid = data?.user;
  const { isLoading, data: user, status } = useUserhook(userid);

  if (user) {
    return (
      <div>
        <p>{course.Course_name}</p>
        <Profile profilepic={data.profile_pic} name={user.username} />
      </div>
    );
  }
}

export default MycourseCard;
