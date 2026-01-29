import { FaBreadSlice } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function WhyWeDoIt() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold text-[#4B2E19]">
          Why We Do It
        </h2>
        <p className="mt-4 text-[#7A6A5E] max-w-xl mx-auto">
          Our values aren't just words; they're the ingredients of everything we do.
        </p>


        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 text-left shadow-sm hover:scale-130 transition ease-in-out duration-300 hover:border-[#f2b93d] hover:shadow-[0_0_20px_3px_rgba(245,210,166)]">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F3E7DA] mb-6 text-[#4B2E19]">
              <FaBreadSlice/>
            </div>
            <h3 className="text-lg font-semibold text-[#4B2E19] mb-2">
              Supporting Local
            </h3>
            <p className="text-[#7A6A5E] text-sm leading-relaxed">
              Every order helps sustain small, independent bakeries and kitchens in
              your neighborhood, keeping local craft alive.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-left shadow-sm hover:scale-130 transition ease-in-out duration-300 hover:border-[#f2b93d] hover:shadow-[0_0_20px_3px_rgba(245,210,166)]">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F3E7DA] mb-6 text-[#4B2E19]">
              <FaLeaf />
            </div>
            <h3 className="text-lg font-semibold text-[#4B2E19] mb-2">
              Conscious Delivery
            </h3>
            <p className="text-[#7A6A5E] text-sm leading-relaxed">
              We focus on sustainable packaging and efficient routing to minimize
              our footprint while maximizing your delight.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-left shadow-sm hover:scale-130 transition ease-in-out duration-300 hover:border-[#f2b93d] hover:shadow-[0_0_20px_3px_rgba(245,210,166)]">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F3E7DA] mb-6 text-[#4B2E19]">
              <FaStar/>
            </div>
            <h3 className="text-lg font-semibold text-[#4B2E19] mb-2">
              Unyielding Quality
            </h3>
            <p className="text-[#7A6A5E] text-sm leading-relaxed">
              If it’s not something we’d serve at our own family table, it doesn’t
              make it to your front door. Guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
