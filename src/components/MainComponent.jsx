import ChemicalGrid from "./ChemicalGrid";

const MainComponent = () => {
  return (
    <div>
      <div className="uppercase flex justify-center text-black font-bold text-md sans-serif">
        labs Instruments quotation
      </div>
      <div className="flex justify-between">
        <div className="text-left px-12">
          <div className="text-sans text-xs">Buyer (Bill to)</div>
          <div className="text-sans font-bold text-xs uppercase">
            VSM Systems Controll
          </div>
          <div className="text-sans text-xs uppercase">
            No 4/3 Pillaiyarkovil Street,
          </div>
          <div className="text-sans text-xs uppercase">
            Jafferkhanpet, Chennai - 600 083
          </div>
        </div>
        <div className="text-left px-12">
          <div className="text-sans text-xs">
            <span className="font-bold">VSM/QTN/</span>
            <span>071-2025-26</span>
          </div>
          <div className="text-sans text-xs">
            <span>
              Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
            </span>
            <span>071-2025-26</span>
          </div>
          <div className="text-sans text-xs uppercase">
            <span className="font-bold">KINT.ATIN&nbsp;</span>
            <span>:&nbsp;</span>
            <span>MR. Udayan sir,</span>
          </div>
          <div className="text-sans text-xs uppercase">QC Incharge.</div>
        </div>
      </div>
      <div>
        <div className="flex flex-col mt-4 mx-12">
          <div className="font-bold text-xs">Dear Sir,</div>
          <div className="text-xs">
            With reference to your esteemed enquiry, we are pleased to submit
            our most competitive offer for your kind perusal and consideration
          </div>
        </div>
      </div>
      <ChemicalGrid />
    </div>
  );
};

export default MainComponent;
