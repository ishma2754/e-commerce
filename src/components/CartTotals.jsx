import { useSelector } from "react-redux";
import {formatPrice} from "../utils/index"
const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/**SUBTOTAL */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span className="font-medium">
            {formatPrice(cartTotal)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CartTotals;
