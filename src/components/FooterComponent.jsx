const FooterComponent = () => {
  return (
    <div className="flex justify-between">
      <div className="text-left px-12">
        <div className="text-sans font-bold text-xs text-blue-900 uppercase">
          VSM Systems Controll
        </div>
        <div className="text-sans text-xs  text-blue-900 uppercase">
          No 4/3 Pillaiyarkovil Street,
        </div>
        <div className="text-sans text-xs  text-blue-900 uppercase">
          Jafferkhanpet, Chennai - 600 083
        </div>
        <div className="text-sans text-xs  text-blue-900 ">
          <span className="font-bold">Mobile No :</span>{" "}
          <span>9884580302 / 9884364518</span>
        </div>
        <div className="text-sans text-xs  text-blue-900 ">
          <span className="font-bold">E-mail :</span>{" "}
          <span>vsmsystemcontroll@gmail.com</span>
        </div>
      </div>
      <div className="text-left px-12">
        <div className="text-sans text-xs text-blue-900">
          <span className="font-bold ">Bank Details</span>
        </div>
        <div className="text-sans text-xs  text-blue-900 ">
          <span className="font-bold">Account Name : </span>
          <span>vsmsystemcontroll@gmail.com</span>
        </div>
        <div className="text-sans text-xs  text-blue-900 ">
          <span className="font-bold">
            Account No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          </span>{" "}
          <span>34823299900</span>
        </div>
        <div className="text-sans text-xs  text-blue-900 ">
          <span className="font-bold">
            Branch
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          </span>{" "}
          <span className="uppercase">SBI, Jafferkhanpet, Chennai-83</span>
        </div>
        <div className="text-sans text-xs  text-blue-900 ">
          <span className="font-bold">
            IFSC Code &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
          </span>{" "}
          <span>SBIN0011653</span>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
