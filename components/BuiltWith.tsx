"use client";

import Image from "next/image";
import React from "react";
import { builtWithCompanies } from "@/data";

export const BuiltWith = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Portfolio
        <span className="text-purple"> built with</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {builtWithCompanies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex md:max-w-60 max-w-32 gap-2">
              <Image
                src={company.img}
                alt={company.name}
                width={200}
                height={200}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
