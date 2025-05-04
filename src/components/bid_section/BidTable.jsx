import React, { useEffect, useState } from "react";
import TableData from "./TableData";

const BidTable = ({ handleClick }) => {
  const [bidItems, setBidItems] = useState([]);

  useEffect(() => {
    fetch("Bid-Items.json")
      .then((res) => res.json())
      .then((data) => setBidItems(data));
  }, []);

  return (
    <div className="overflow-x-auto w-full mx-auto p-4 bg-white shadow rounded-xl">
      <table className="min-w-full table-auto border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left text-nowrap">
            <th className="px-3 py-2">Items</th>
            <th className="px-3 py-2">Current Bid</th>
            <th className="px-3 py-2">Time Left</th>
            <th className="px-3 py-2">Bid Now</th>
          </tr>
        </thead>
        <tbody>
          {bidItems.map((item) => (
            <TableData key={item.id} item={item} handleClick={handleClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidTable;
