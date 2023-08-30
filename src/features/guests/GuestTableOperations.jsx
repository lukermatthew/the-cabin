import TableOperations from "../../ui/TableOperations";
import PageSize from "../../ui/PageSize";
import SortBy from "../../ui/SortBy";
import { optionPageSize } from "../../utils/constants";

const GuestTableOperations = () => {
  const optionsSortBy = [
    {
      value: "fullName-asc",
      label: "Sort by name (A-Z)",
    },
    {
      value: "fullName-desc",
      label: "Sort by name (Z-A)",
    },
  ];
  return (
    <TableOperations>
      <PageSize options={optionPageSize} />
      <SortBy options={optionsSortBy} />
    </TableOperations>
  );
};

export default GuestTableOperations;
