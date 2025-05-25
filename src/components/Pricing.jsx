import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20 px-4">
  {/* Section Title */}
  <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide font-bold text-white">
    Pricing
  </h2>

  {/* Pricing Cards */}
  <div className="flex flex-wrap justify-center gap-6">
    {pricingOptions.map((option, index) => (
      <div
        key={index}
        className={`w-full sm:w-[47%] lg:w-[30%] p-2 transform transition duration-300 hover:scale-[1.03] ${
          option.title === "Pro"
            ? "bg-gradient-to-br from-orange-800/40 to-red-800/30"
            : "bg-white/5"
        } backdrop-blur-md border border-white/10 shadow-md rounded-2xl`}
      >
        <div className="p-8 text-white">
          {/* Title + Badge */}
          <p className="text-4xl font-semibold mb-4 flex items-center">
            {option.title}
            {option.title === "Pro" && (
              <span className="ml-3 text-sm bg-gradient-to-r from-orange-500 to-red-400 text-white px-2 py-1 rounded-md font-medium">
                Most Popular
              </span>
            )}
          </p>

          {/* Price */}
          <p className="mb-6">
            <span className="text-5xl font-bold">{option.price}</span>
            <span className="text-neutral-400 text-xl ml-2">/month</span>
          </p>

          {/* Features */}
          <ul className="text-neutral-200 mb-8 space-y-4">
            {option.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <CheckCircle2 className="text-green-400 mr-3" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <a
            href="#"
            className="block w-full text-center py-3 rounded-lg font-semibold text-lg border border-orange-600 text-orange-400 hover:bg-orange-600 hover:text-white transition duration-200"
          >
            Subscribe
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Pricing;