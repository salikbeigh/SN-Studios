import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col p-10 border border-neutral-700 rounded-xl h-full">
              <p className="text-4xl mb-8">
                {option.title}

                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-green-600 to-green-950 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8 flex items-center space-x-2">
                <span className="text-lg text-neutral-400 tracking-tight">
                  Pay once
                </span>
                <span className="text-5xl mr-2">{option.price}</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="/"
                  className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-5 tracking-tight text-xl hover:bg-green-900 border border-green-900 rounded-lg transition duration-200"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
