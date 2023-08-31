import Input from "../ui/Input";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("fullName") || "";

  const handleSearch = (e) => {
    searchParams.set("fullName", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Input
        type="text"
        id="search"
        placeholder="Search ..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
