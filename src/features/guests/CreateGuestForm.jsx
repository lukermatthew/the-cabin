import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { useCreateGuest } from "./useCreateGuest";
import { useEditGuest } from "./useEditGuest";
import { useNavigate } from "react-router-dom";

function CreateGuestForm({ guestToEdit = {}, onCloseModal }) {
  const navigate = useNavigate();

  const { isCreating, createGuest } = useCreateGuest();
  const { isEditing, editGuest } = useEditGuest();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = guestToEdit;
  const isEdit = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEdit ? editValues : {},
  });

  const { errors } = formState;

  function onSubmit(data) {
    if (isEdit)
      editGuest(
        { newGuestData: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            navigate(`/guests`);
          },
        }
      );
    else
      createGuest(
        { ...data },
        {
          onSuccess: (data) => {
            reset();
            // onCloseModal?.();
            navigate(`/guests`);
          },
        }
      );
  }

  const onError = (errors) => {
    // console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow label="Nationality" error={errors?.nationality?.message}>
        <Input
          type="text"
          id="nationality"
          {...register("nationality", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => navigate(`/guests`)}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          <span>{isEdit ? " Edit Guest" : " Create Guest"}</span>
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateGuestForm;
