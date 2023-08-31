import { useQuery } from "@tanstack/react-query";
import { getGuests } from "../../services/apiGuest";
import { useSearchParams } from "react-router-dom";
import { optionPageSize } from "../../utils/constants";

export const useGuest = () => {
  const [searchParams] = useSearchParams();

  // SEARCH
  const searchQuery = searchParams.get("fullName");

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "fullName-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGE SIZE
  const pageSize = searchParams.get("pageSize") || optionPageSize[0].value;

  // PAGINATION
  let page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: guests, count } = {},
    isError,
  } = useQuery({
    queryKey: ["guests", sortBy, page, pageSize, searchQuery],
    queryFn: () => getGuests({ sortBy, page, pageSize, searchQuery }),
  });

  return { isLoading, guests, isError, count };
};
