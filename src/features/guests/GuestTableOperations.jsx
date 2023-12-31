import TableOperations from "../../ui/TableOperations";
import PageSize from "../../ui/PageSize";
import SortBy from "../../ui/SortBy";
import { optionPageSize } from "../../utils/constants";
import Search from "../../ui/Search";

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
      <Search />
      <PageSize options={optionPageSize} />
      <SortBy options={optionsSortBy} />
    </TableOperations>
  );
};

export default GuestTableOperations;
