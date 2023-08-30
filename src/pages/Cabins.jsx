import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import { FaPlus } from "react-icons/fa";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import "./cabin.css";
import { Link } from "react-router-dom";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <Link to="/cabins/create" className="float">
          <i className="FaPlus my-float">
            <FaPlus />
          </i>
        </Link>
      </Row>
    </>
  );
}

export default Cabins;
