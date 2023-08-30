import { Link } from "react-router-dom";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import GuestTable from "../features/guests/GuestTable";
import { FaPlus } from "react-icons/fa";
import GuestTableOperations from "../features/guests/GuestTableOperations";

const Guests = () => {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All guests</Heading>
        <GuestTableOperations />
      </Row>
      <Row>
        <GuestTable />
        <Link to="/guests/create" className="float">
          <i className="FaPlus my-float">
            <FaPlus />
          </i>
        </Link>
      </Row>
    </>
  );
};

export default Guests;
