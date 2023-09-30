import React from "react";
import Link from "next/link";

const Page = async ({ params }) => {
  let json;
  try {
    const res = await fetch(
      `http://127.0.0.1:5000/get_student_info/${params.usn.toUpperCase()}`
    );
    console.log(res);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    json = await res.json();
  } catch (error) {
    console.error("Fetch Error: ", error);
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <Link href="/students">Back</Link>
      <div className="bg-white shadow rounded p-5">
        <h2 className="text-2xl font-bold mb-5">{json.name}</h2>
        <p>
          <strong>USN:</strong> {json.id}
        </p>
        <p>
          <strong>Department:</strong> {json.department}
        </p>
        <p>
          <strong>DOB:</strong> {json.dob}
        </p>
        <p>
          <strong>Email:</strong> {json.emailID}
        </p>
        <p>
          <strong>Gender:</strong> {json.gender}
        </p>
        <p>
          <strong>Phone Number:</strong> {json.phoneNumber}
        </p>
        <p>
          <strong>Phone Number:</strong> {json.cgpa}
        </p>
      </div>
    </div>
  );
};

export default Page;
