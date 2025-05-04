import React from "react";
import { RxCross2 } from "react-icons/rx";

const FavSec = ({ item, handleRemove }) => {
  return (
    <div className="w-[307px] bg-slate-100 flex justify-between items-center rounded-xl border p-3 my-3">
      <div className="flex items-center gap-2.5">
        <div>
          <img
            className="w-16 h-16 object-cover border rounded-xl"
            src={item.image}
            alt={item.title}
          />
        </div>
        <div className="space-y-0.5">
          <h6>{item.title}</h6>
          <p className="text-xs">${item.currentBidPrice}</p>
          <p className="text-xs">Bid: {item.bidsCount}</p>
        </div>
      </div>
      <div>
        <button
          className="cursor-pointer hover:text-red-700 transition duration-300"
          onClick={() => handleRemove(item.id, item.currentBidPrice)}
        >
          <RxCross2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default FavSec;
