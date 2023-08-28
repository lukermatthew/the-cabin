import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiTrash,
} from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmModal from "../../ui/ConfirmModal";
import Menus from "../../ui/Menus";
import { useCheckout } from "../check-in-out/useCheckout";
import CheckoutButton from "../check-in-out/CheckoutButton";
import { useDeleteBooking } from "./useDeleteBooking";
import Empty from "../../ui/Empty";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { isLoading, booking } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const navigate = useNavigate();

  const moveBack = useMoveBack();

  if (isLoading || isCheckingOut || isDeleting) return <Spinner />;

  if (!booking) return <Empty resourceName="booking" />;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  function handleCheckout() {
    checkout(bookingId);
  }

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            <HiArrowDownOnSquare /> Check In
          </Button>
        )}
        {/* {status === "checked-in" && (
          <CheckoutButton handleCheckout={handleCheckout} />
        )} */}
        <Modal>
          {status === "checked-in" && (
            <Modal.Open opens="checkout">
              <Button variation="primary">
                {" "}
                <HiArrowUpOnSquare /> Checkout
              </Button>
            </Modal.Open>
          )}
          <Modal.Open opens="delete">
            <Button variation="danger">
              <HiTrash /> Delete Booking
            </Button>
          </Modal.Open>

          <Modal.Window name="checkout">
            <ConfirmModal
              resourceName="bookings"
              disabled={isCheckingOut}
              onConfirm={handleCheckout}
              headingName="Checkout Bookings"
              paragName="Are you sure you want to checkout this bookings permanently? This
        action cannot be undone."
              btnName="Checkout"
              variation="primary"
            />
          </Modal.Window>

          <Modal.Window name="delete">
            <ConfirmModal
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                })
              }
              headingName="Delete Bookings"
              paragName="Are you sure you want to delete this bookings permanently? This
        action cannot be undone."
              btnName="Delete"
              variation="danger"
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
