import React, { useState } from "react";

const ProductDetail = () => {
  const [productInfo, setNewProduct] = useState({
    image:
      " https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L2hpcHBvdW5pY29ybjc2X3dhdGVyY29sb3JfaWxsdXN0cmF0aW9uX29mX2xhcHRvcF9pc29sYXRlX2lsbHVzdF85ODc5ZmYwOS1iMjM5LTQ2ZDItYWM2Yi1iYzcwMjI3MGJmZTQucG5n.png",
    name: "Rice ",
    price: 2000,
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        alignItems: "center",
        
      }}
    >
      <img
        src={productInfo.image}
        style={{ width: "400px", height: "400px" }}
      />
      <h3>{productInfo.name}</h3>
      <h3>{productInfo.price}</h3>
    </div>
  );
};

export default ProductDetail;
