import React, { useState } from "react";

const ProductDetails = () => {
  const [productInfo, setNewProduct] = useState({
    image:
      "https://dreamagro.com.np/filemanager/photos/1/product/62a04bbac6799.png",
    name: "rice",
    price: 3000,
    type: "basmati",
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          width: "400px",
          alignItems: "center",
        }}
      >
        <img
          src={productInfo.image}
          alt="Basmati chammal"
          style={{ width: "400px", height: "400px" }}
        />

        <h3>{productInfo.name}</h3>
        <h3>{productInfo.price}</h3>
        <h3>{productInfo.type}</h3>
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            const newValue = event.target.value;
            //   setNewProduct(newValue);
            setNewProduct({
              ...productInfo,
              name: newValue,
            });
          }}
        />
      </div>
      <div>
        <input
          type="number"
          onChange={(event) => {
            const newValue = event.target.value;
            //   setNewProduct(newValue);
            setNewProduct({
              ...productInfo,
              price: newValue,
            });
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
