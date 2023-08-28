import { useLogout } from "./useLogout";

import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();

  function handleLogout() {
    logout();
  }

  if (!isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle />)
    return (
      <ButtonIcon onClick={handleLogout}>
        <HiArrowRightOnRectangle />
      </ButtonIcon>
    );
}

export default Logout;
