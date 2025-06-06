import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://polamarketing.com/wp-content/uploads/2024/06/On_Model-13@2x.jpg",
      img2: "https://www.shutterstock.com/image-photo/young-black-woman-cream-suit-600nw-2491218847.jpg",
      title: "test data-1",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://polamarketing.com/wp-content/uploads/2024/06/On_Model-13@2x.jpg",
      title: "test data-2",
      isNew: true,
      oldPrice: 40,
      price: 30,
    },
    {
      id: 3,
      img: "https://polamarketing.com/wp-content/uploads/2024/06/On_Model-13@2x.jpg",
      title: "test data-3",
      isNew: true,
      oldPrice: 26,
      price: 67,
    },
    {
      id: 4,
      img: "https://polamarketing.com/wp-content/uploads/2024/06/On_Model-13@2x.jpg",
      title: "test data-4",
      isNew: true,
      oldPrice: 7,
      price: 5,
    },
  ];

  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
