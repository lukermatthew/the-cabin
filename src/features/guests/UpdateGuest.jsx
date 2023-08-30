import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import CreateGuestForm from "./CreateGuestForm";
import { useLocation } from "react-router-dom";

const UpdateGuest = () => {
  const location = useLocation();
  const { guest } = location.state || {};
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Update a guest</Heading>
      </Row>
      <Row>
        <CreateGuestForm guestToEdit={guest} />
      </Row>
    </>
  );
};

export default UpdateGuest;
