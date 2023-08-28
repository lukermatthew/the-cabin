import Button from "../../ui/Button";
import { HiArrowUpOnSquare } from "react-icons/hi2";

function CheckoutButton({ handleCheckout }) {
  return (
    <Button variation="primary" sizes="small" onClick={handleCheckout}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
