import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 flex space-x-4">
    <div className="flex-shrink-0">
      <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
    </div>
    <div className="flex-grow">
    
      <h1 className="text-xl font-semibold">{item.title}</h1>

      <p  className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>

      <div className="flex items-center justify-between mt-2">

        <p className="text-green-600 font-semibold">${item.price}</p>

        <div className="cursor-pointer text-red-600" onClick={removeFromCart}>

          <MdDeleteSweep className="w-6 h-6"></MdDeleteSweep>

        </div>

      </div>
    </div>
  </div>  
  );
};

export default CartItem;
