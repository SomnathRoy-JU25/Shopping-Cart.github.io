import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div >
      {cart.length > 0 ? (
        <div >
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="">
            <div className="flex flex-col  justify-center items-center">
              <div className="text-lg font-semibold mb-2">Your Cart</div>
              <div className="text-3xl font-semibold mb-2 text-emerald-400">Summary</div>
              <p>
                <span className="text-gray-600 ">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            <div className="flex flex-col  justify-center items-center p-3">
              <p className="text-green-600 font-semibold p-3">Total Amount: ${totalAmount}</p>
              <button
                 className="text-black font-semibold rounded-lg bg-green-600 p-2 "
              >
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center ">
          <h1 className="p-20 text-blue-700 text-bold text-5xl">Cart Empty</h1>
          <Link to={"/"}>
            <button
              className="text-blue-500 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase  hover:bg-gray-700
          hover:text-green-500 transition duration-300 ease-in text-3xl "
            >
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
