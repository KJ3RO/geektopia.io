import { CommingSoon } from "@/components/CommingSoon";
import { FloatingNavbar } from "@/components/FloatingNavbar";
import React from "react";

const Product = () => {
  return (
    <div>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
        <div className="h-36"></div>
        <FloatingNavbar />
        <CommingSoon />
      </main>
    </div>
  );
};

export default Product;
