import React from "react";
import { useParams } from "react-router-dom";
import ImageCard from "../components/cards/ImageCard";
function CourseDetails() {
  const { courseId } = useParams();
  console.log("Inside you", courseId);
  return (
    <div className="w-full h-full bg-amber-200">
      <ImageCard title={courseId} buttonRequired={false} />
      <p>
        You are visiting <strong>{courseId}</strong> page{" "}
      </p>
    </div>
  );
}

export default CourseDetails;
