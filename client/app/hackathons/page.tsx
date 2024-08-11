"use client";

import { FloatingNavbar } from "@/components/FloatingNavbar";
import React, { useEffect } from "react";

const Hackathons = () => {
  const [hackathonData, useHackathonData] = React.useState("Loading");

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/hackathons")
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useHackathonData(data.message);
      });
  }, []);

  return (
    <div>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
        <div className="h-36"></div>
        <FloatingNavbar />
        {hackathonData}
      </main>
    </div>
  );
};

export default Hackathons;
