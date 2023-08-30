import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { optionPageSize } from "../../utils/constants";

export const useBookings = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "created_at-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGE SIZE
  const pageSize = searchParams.get("pageSize") || optionPageSize[0].value;

  // PAGINATION
  let page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: bookings, count } = {},
    isError,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page, pageSize],
    queryFn: () => getBookings({ filter, sortBy, page, pageSize }),
    retry: false,
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / pageSize);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1, pageSize],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1, pageSize }),
    });

  if (page < 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1, pageSize],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1, pageSize }),
    });

  return { isLoading, bookings, isError, count };
};
