import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmModal = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmModal({
  resourceName,
  onConfirm,
  disabled,
  onCloseModal,
  headingName,
  paragName,
  btnName,
  variation,
}) {
  return (
    <StyledConfirmModal>
      <Heading as="h3">{headingName}</Heading>
      <p>{paragName}</p>

      <div>
        <Button
          onClick={onCloseModal}
          variation="secondary"
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button onClick={onConfirm} variation={variation} disabled={disabled}>
          {btnName}
        </Button>
      </div>
    </StyledConfirmModal>
  );
}

export default ConfirmModal;
