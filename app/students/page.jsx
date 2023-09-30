"use client";
import React, { useEffect, useState } from "react";
import CardDataStats from "@/components/CardDataStats";
import Link from "next/link";

const Page = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data from Flask backend when the component mounts
    fetch("http://127.0.0.1:5000/get_students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data); // Assuming the data is an array of student objects
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="max-h-screen overflow-y-scroll">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {students.map((student) => (
          <Link href={`students/info/${student.username}`} key={student.id}>
            <CardDataStats
              total={student.name} // Assuming 'name' is the student's name
              title={student.username} // Assuming 'username' is the student's username
              rate={student.rate} // Assuming 'rate' is the student's rate
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </CardDataStats>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
