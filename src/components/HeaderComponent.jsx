import { Typography } from "@mui/material";
import logo from "../assets/logo.png";

const HeaderComponent = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="w-1/3 text-center px-8">
        <img src={logo} width={160} height={160} />
      </div>
      <div className="w-2/3 text-center">
        <div className="text-2xl mt-2 text-blue-900 uppercase font-semibold sans-serif">
          VSM Systems Controll
        </div>
        <div className="text-xs mt-1 text-red-700 font-semibold sans-serif">
          Manufacturers of Laboratory Instruments & Temperature Meters, All Type
          of Cooling and Heating Equipment's Suppliers of Hi Media Chemicals &
          Glassware's , Supply of SEA Food Labs & R&D Labs, Colleges, Hospitals
          NABL Calibration Accreditation Instruments
        </div>
      </div>
      <div className="w-1/3 text-left pl-20 py-0">
        <div>
          <span className="text-xs text-blue-900 font-sans">
            TIN No &nbsp;:
          </span>
          &nbsp;
          <span className="text-xs text-blue-900 font-sans font-bold">
            33666269469
          </span>
        </div>
        <div>
          <span className="text-xs text-blue-900 font-sans">CST No :</span>
          &nbsp;
          <span className="text-xs text-blue-900 font-sans font-bold">
            1136047/01-11-14
          </span>
        </div>
        <div>
          <span className="text-xs text-blue-900 font-sans">
            GSTIN &nbsp;&nbsp;:
          </span>{" "}
          &nbsp;
          <span className="text-xs text-blue-900 font-sans font-bold">
            33AFUPV4412N2ZR
          </span>
        </div>
        <div>
          <span className="text-xs text-blue-900 font-sans font-bold">
            9884580302 / 9884364518
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
