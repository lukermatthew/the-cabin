import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import PageSize from "../../ui/PageSize";
import { optionPageSize } from "../../utils/constants";

function BookingTableOperations() {
  const optionFilter = [
    { value: "all", label: "All" },
    { value: "checked-out", label: "Checked out" },
    { value: "checked-in", label: "Checked in" },
    { value: "unconfirmed", label: "Unconfirmed" },
  ];

  const optionSortBy = [
    {
      value: "created_at-desc",
      label: "Sort by date (newest bookings)",
    },
    { value: "startDate-desc", label: "Sort by book date (recent first)" },
    { value: "startDate-asc", label: "Sort by book date (earlier first)" },
    {
      value: "totalPrice-desc",
      label: "Sort by amount (high first)",
    },
    { value: "totalPrice-asc", label: "Sort by amount (low first)" },
  ];

  return (
    <TableOperations>
      <Filter filterField="status" options={optionFilter} />

      <SortBy options={optionSortBy} />
      <PageSize options={optionPageSize} />
    </TableOperations>
  );
}

export default BookingTableOperations;
