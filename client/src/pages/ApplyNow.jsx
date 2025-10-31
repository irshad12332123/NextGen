import React, { useState } from "react";

export const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });
  return (
    <main className="min-h-screen w-full">
      <form action="/submit" method="POST"></form>
    </main>
  );
};
