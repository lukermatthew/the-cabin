import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserData from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">My Account</Heading>
        <UpdateUserData />
      </Row>

      <Row>
        <Heading as="h3">Change Password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
