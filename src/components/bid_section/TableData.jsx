import { BiColor } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
// import { GoHeartFill } from "react-icons/go";
// import { AiFillHeart } from "react-icons/ai";

import { useState } from "react";

const TableData = ({ item, handleClick }) => {
  const { image, title, currentBidPrice, timeLeft } = item;
  const [isActive, setIsActive] = useState(false);

  const handleClick2 = () => {
    setIsActive(!isActive);
  };

  return (
    <tr className="bg-white shadow-sm rounded-lg">
      <td className="p-3 flex items-center gap-2">
        <img
          src={image}
          alt="Leica Camera"
          className="w-14 h-14 object-cover"
        />
        {title}
      </td>
      <td className="p-3">${currentBidPrice}</td>
      <td className="p-3">{timeLeft}</td>
      <td className="p-3 text-xl text-gray-400 ">
        <button
          id="removeBtn"
          className={`${
            isActive ? "cursor-not-allowed" : "cursor-pointer"
          }  hover:text-red-700 transition duration-300`}
          onClick={() => {
            handleClick(item, currentBidPrice);
            handleClick2();
          }}
          disabled={isActive ? true : false}
        >
          {isActive ? (
            <FiHeart size={26} color="red" className="fill-red-500" />
          ) : (
            <FiHeart size={26} color="gray" />
          )}
        </button>
      </td>
    </tr>
  );
};

export default TableData;
