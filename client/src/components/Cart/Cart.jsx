import React from "react";
import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://polamarketing.com/wp-content/uploads/2024/06/On_Model-13@2x.jpg",
      img2: "https://www.shutterstock.com/image-photo/young-black-woman-cream-suit-600nw-2491218847.jpg",
      title: "test data-1",
      desc: "jsajfho fashfsdfhaiulshfasir f usfhsaef isfh",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://polamarketing.com/wp-content/uploads/2024/06/On_Model-13@2x.jpg",
      title: "test data-2",
      desc: "ahfashfa sfhuafnas fiushfshf usaehf usah fis",
      isNew: true,
      oldPrice: 40,
      price: 30,
    },
  ];

  return (
    //duafho uerfsfhs
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$999</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
