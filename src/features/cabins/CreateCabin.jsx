import React from "react";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import CreateCabinForm from "./CreateCabinForm";

const CreateCabin = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Create a new cabin</Heading>
      </Row>
      <Row>
        <CreateCabinForm />
      </Row>
    </>
  );
};

export default CreateCabin;
