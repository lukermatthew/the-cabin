import { useSearchParams } from "react-router-dom";
import Select from "./Select";

const PageSize = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageSize = searchParams.get("pageSize") || options[0].value;

  const handleChange = (e) => {
    searchParams.set("pageSize", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Select
      options={options}
      value={pageSize}
      type="white"
      onChange={handleChange}
    />
  );
};

export default PageSize;
