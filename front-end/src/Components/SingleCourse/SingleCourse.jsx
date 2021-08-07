import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { courseDetails } from "../../Redux/SearchPage/action";

function SingleCourse() {
  const singlecoursedata = useSelector((state) => state.single);
  console.log(singlecoursedata);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(courseDetails());
  }, []);
  return (
    <div>
      <h1>Single Course </h1>
    </div>
  );
}
export { SingleCourse };
