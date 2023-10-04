"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import ChartOne from "@/components/Charts/ChartOne";
import Image from "next/image";

function Page({ params }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const resp = {};
    fetch(`http://127.0.0.1:5000/get_student_info/${params.usn.toUpperCase()}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  }, [params.usn]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="dark:border-strokedark dark:bg-boxdark">
      <div className="rounded-2xl p-10 bg-gray-100 min-h-screen dark:bg-meta-4">
        <Link href="/students">Back</Link>
        <div className="bg-white shadow p-5 rounded-2xl dark:bg-form-input">
          <Image
            alt="image of student"
            src={`/images/students/${data.department}/${data.id}.jpg`}
            width={100}
            height={100}
            className="pb-5"
          />
          <h2 className="text-2xl font-bold mb-5">{data.name}</h2>
          <p>
            <strong>USN:</strong> {data.id}
          </p>
          <p>
            <strong>Department:</strong> {data.department}
          </p>
          <p>
            <strong>DOB:</strong> {data.dob}
          </p>
          <p>
            <strong>Email:</strong> {data.emailID}
          </p>
          <p>
            <strong>Gender:</strong> {data.gender}
          </p>
          <p>
            <strong>Phone Number:</strong> {data.phoneNumber}
          </p>
          <p>
            <strong>CGPA:</strong> {data.rate}
          </p>
        </div>
        <ChartOne
          oneDataName="Department SGPA"
          twoDataName="Student SGPA"
          graphDataOne={data.deptScores}
          graphDataTwo={data.scores}
        />
      </div>
    </div>
  );
}

export default Page;
