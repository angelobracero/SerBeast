import { FaStar } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";
import Button from "./Button";

const ServiceProfessional = ({ img, name, description }) => {
  return (
    <div className="border-[3px] border-lightblue w-[229px] h-[350px] rounded-lg">
      <div className="flex flex-col items-center relative w-[80%] mx-auto gap-4">
        <img src={img} alt="profile image" className="absolute top-[-3.5em]" />
        <h3 className="text-xl font-semibold pt-12">{name}</h3>
        <div className="flex gap-2">
          <FaStar className="text-[#fffc37] h-5 w-5" />
          <FaStar className="text-[#fffc37] h-5 w-5" />
          <FaStar className="text-[#fffc37] h-5 w-5" />
          <FaStar className="text-[#fffc37] h-5 w-5" />
          <FaStar className="text-[#fffc37] h-5 w-5" />
        </div>
        <p className=" ">
          4.5 Rating<span className="italic text-gray-400 text-sm">(25)</span>
        </p>
        <div className="flex items-center gap-1">
          <PiMapPinFill className="text-red-600 h-6 w-6" />
          <p className="font-semibold text-sm">Location: North Signal</p>
        </div>
        <p className="font-roboto text-start text-sm">
          {description}
          <span className="text-gray-400 italic">...read more</span>
        </p>
        <Button className="bg-lightblue hover:brightness-100 py-1 ">
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default ServiceProfessional;
