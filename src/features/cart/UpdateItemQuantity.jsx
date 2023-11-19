import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItem, increaseItem } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentItemQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItem(pizzaId))}>
        -
      </Button>
      <span className="font-medium text-sm">{currentItemQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
