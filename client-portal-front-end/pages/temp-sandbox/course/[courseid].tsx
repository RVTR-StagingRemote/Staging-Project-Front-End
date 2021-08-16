import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import CourseInfoDiv from "../../../components/UI/CourseInfoDiv";
import { ICourse } from "../../../models/ICourse";
import { GetCourse } from "../../../utils/services/course-service";

/**
 * Example page on using a service to fetch and parse data into a react component using Next's dynamic routing
 */
const CourseInfoPage: NextPage = () => {
  const router = useRouter();
  const { courseid } = router.query;
  const [course, setcourse] = useState<ICourse | null>(null);

  useEffect(() => {
    GetCourse(courseid as string).then((data) => setcourse(data));
  }, []);

  return (
    <div className="container">
      {course ? <CourseInfoDiv course={course} /> : <h2>Loading...</h2>}
    </div>
  );
};

export default CourseInfoPage;
