import React from "react";
import Image from "next/image";
import { companies } from "@/data";

const Sponsors = () => {
  return (
    <section className="py-40">
      {/* <p className="uppercase text-xs text-center text-blue-100">Sponsors and Partners</p>
      <h1 className="text-4xl font-bold text-center text-white mt-6">
        Great thanks to all of them
      </h1> */}

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex md:max-w-60 max-w-32 gap-2">
              {company.img != null && (
                <Image src={company.img} alt={""} height={company.height} width={company.width} />
              )}
              {company.name != null && <p className="text-gray-400 font-normal">{company.name}</p>}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
