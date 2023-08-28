import { useState } from "react";

import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { formatDistanceFromNow, formattedDate } from "../../utils/helpers";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
      last_sign_in_at,
      confirmed_at,
    },
  } = useUser();

  const { updateUser, isLoading } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser({ fullName, avatar });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="joined at">
        <p>{formattedDate(confirmed_at)}</p>
      </FormRow>
      <FormRow label="Last sign in at">
        <p>{formatDistanceFromNow(last_sign_in_at)}</p>
      </FormRow>

      <FormRow>
        {/* <Button type="reset" variation="secondary">
          Cancel
        </Button> */}
        <Button disabled={isLoading}>
          {!isLoading ? "Update account" : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
