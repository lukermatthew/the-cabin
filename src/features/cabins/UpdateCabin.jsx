import React from "react";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import CreateCabinForm from "./CreateCabinForm";
import { useLocation } from "react-router-dom";

const UpdateCabin = () => {
  const location = useLocation();
  const { cabin } = location.state || {};
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Update a cabin</Heading>
      </Row>
      <Row>
        <CreateCabinForm cabinToEdit={cabin} />
      </Row>
    </>
  );
};

export default UpdateCabin;
