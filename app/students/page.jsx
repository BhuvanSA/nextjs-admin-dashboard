"use client";
import React, { useEffect, useState } from "react";
import CardDataStats from "@/components/CardDataStats";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const [students, setStudents] = useState([]);
  const [dept, setDept] = useState("AI");

  useEffect(() => {
    // Fetch data from Flask backend when the component mounts
    fetch(`http://127.0.0.1:5000/get_students/${dept}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStudents(data); // Assuming the data is an array of student objects
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dept]);

  const handleDeptClick = (e) => {
    const value = e.target.value;
    setDept(value);
  };

  return (
    <div className="max-h-screen overflow-y-scroll">
      <div className="my-3">
        <ul className="flex flex-row">
          {["AI", "AD", "CS", "EC", "IS", "EE", "ME", "AE", "CV"].map((d) => (
            <li key={d}>
              <button
                className=" bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded-2xl"
                value={d}
                onClick={handleDeptClick}
              >
                {d}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {students.map((student) => (
          <Link href={`students/info/${student.username}`} key={student.id}>
            <CardDataStats
              total={student.name} // Assuming 'name' is the student's name
              title={student.username} // Assuming 'username' is the student's username
              rate={student.rate} // Assuming 'rate' is the student's rate
            >
              <Image
                alt="image of student"
                src={`/images/students/${student.department}/${student.username}.jpg`}
                width={30}
                height={30}
              />
            </CardDataStats>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
