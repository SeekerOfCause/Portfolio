import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Location</span><a>Patuxent River, Maryland</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">email</span>{" "}
        <a href="mailto:Michael.Maye@HarrowingPleasantries.com">Michael.Maye@HarrowingPleasantries.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">phone</span>{" "}
        <a href="Tel: 1 904 446 8884">904 446 8884</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
