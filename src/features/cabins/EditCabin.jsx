import CreateCabinForm from "../../features/cabins/CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

const EditCabin = () => {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Save Cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
};

export default EditCabin;
