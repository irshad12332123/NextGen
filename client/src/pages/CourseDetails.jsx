import React from "react";
import { useParams } from "react-router-dom";
function CourseDetails() {
  const { id } = useParams();
  return (
    <div>
      <p>
        You are visiting <strong>{id}</strong> page{" "}
      </p>
    </div>
  );
}

export default CourseDetails;
