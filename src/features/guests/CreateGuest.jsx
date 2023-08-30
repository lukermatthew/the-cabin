import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import CreateGuestForm from "./CreateGuestForm";

const CreateGuest = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Create a new guest</Heading>
      </Row>
      <Row>
        <CreateGuestForm />
      </Row>
    </>
  );
};

export default CreateGuest;
