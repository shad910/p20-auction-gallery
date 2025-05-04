import "./App.css";
import BidTable from "./components/bid_section/BidTable";
import FavSec from "./components/bid_section/FavSec";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/hero";
import NavBar from "./components/navbar/NavBar";
import { ToastContainer, toast } from "react-toastify";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";

function App() {
  const [favItem, setFavItem] = useState([]);
  const [price, setPrice] = useState(0);

  const handleClick = (item, currentBidPrice) => {
    setFavItem([...favItem, item]);
    addPrice(currentBidPrice);
    toast("🦄 Item added to your favorite lists", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const addPrice = (currentBidPrice) => {
    const newPrice = price + currentBidPrice;
    setPrice(newPrice);
  };

  const handleRemove = (id, price) => {
    const remove = favItem.filter((item) => item.id !== id);
    setFavItem(remove);
    removePrice(price);
    document.getElementById("removeBtn").removeAttribute("disabled");
    toast.warn("Item removed from your favorite lists", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const removePrice = (currentBidPrice) => {
    const newPrice = price - currentBidPrice;
    setPrice(newPrice);
    document.getElementById("removeBtn").removeAttribute("disabled");
  };

  return (
    <>
      {/* Header Section */}
      <header className="w-11/12 mx-auto">
        <NavBar price={price} favItem={favItem}></NavBar>
      </header>

      <section className="bg-gray-100">
        {/* Main Section */}
        <main>
          <section>
            <Hero></Hero>
          </section>

          <section className="my-10 w-11/12 mx-auto">
            <div className="mb-5 space-y-2.5">
              <h2 className="text-2xl font-medium text-[#0E2954]">
                Active Auctions
              </h2>
              <p className="text-sm text-[#000000]">
                Discover and bid on extraordinary items
              </p>
            </div>
            <section className=" lg:flex items-start justify-between lg:gap-x-5 ">
              <div className="leftContainer mb-5 lg:mb-0 w-[70%]">
                <BidTable handleClick={handleClick}></BidTable>
              </div>

              <div className="rightContainer w-[30%">
                <div className="w-full  rounded-xl shadow-sm p-6 bg-white">
                  {/* Header */}
                  <div className="text-center border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-[#0E2954] flex items-center justify-center gap-2 mb-6">
                      <span className="text-xl">
                        <FiHeart />
                      </span>
                      Favorite Items
                    </h2>
                  </div>

                  {favItem.map((item) => (
                    <FavSec
                      key={item.id}
                      item={item}
                      handleRemove={handleRemove}
                    />
                  ))}

                  <div
                    className={`${
                      favItem.length !== 0 ? "hidden" : "block"
                    } flex flex-col items-center justify-center flex-grow py-10`}
                  >
                    <p className="font-semibold text-gray-800 mb-2">
                      No favorites yet
                    </p>
                    <p className="text-sm text-gray-500 text-center max-w-xs">
                      Click the heart icon on any item to add it to your
                      favorites
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="border-t  border-gray-200 pt-4 mt-6 flex justify-between items-center text-base font-medium">
                    <span>Total bids Amount</span>
                    <span className="font-semibold text-gray-900">
                      ${price}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </main>

        {/* Footer Section */}
        <footer className="mt-10">
          <Footer></Footer>
        </footer>
      </section>
      <ToastContainer />
    </>
  );
}

export default App;
