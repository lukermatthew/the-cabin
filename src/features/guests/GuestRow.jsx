import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import { useDeleteGuest } from "./useDeleteGuest";
import { formattedDate } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import ConfirmModal from "../../ui/ConfirmModal";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import UpdateGuest from "./UpdateGuest";

function GuestRow({ guest }) {
  const navigate = useNavigate();
  const { isDeleting, deleteGuest } = useDeleteGuest();

  if (isDeleting) return <Spinner />;

  const { id: guestId, fullName, email, nationality, created_at } = guest;

  function handleEditClick() {
    navigate("/guests/edit", { state: { guest } });
  }

  return (
    <Table.Row>
      <div>{guestId}</div>
      <div>{fullName}</div>
      <div>{email}</div>
      <div>{nationality}</div>
      <div>{formattedDate(created_at)}</div>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={guestId} />

            <Menus.List id={guestId}>
              <Menus.Button icon={<HiPencil />} onClick={handleEditClick}>
                Edit
              </Menus.Button>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <UpdateGuest guestToEdit={guest} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmModal
                resourceName="guests"
                disabled={isDeleting}
                onConfirm={() => deleteGuest(guestId)}
                headingName="Delete Guests"
                paragName="Are you sure you want to delete this guest permanently? This
        action cannot be undone."
                btnName="Delete"
                variation="danger"
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default GuestRow;
