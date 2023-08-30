import { useSearchParams } from "react-router-dom";
import { useGuest } from "./useGuest";
import Spinner from "../../ui/Spinner";
import GuestRow from "./GuestRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";

function GuestTable() {
  const { isLoading, guests, count, pageSize } = useGuest();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  if (!guests?.length) return <Empty resourceName="guests" />;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Id</div>
          <div>Name</div>
          <div>Email</div>
          <div>Nationality</div>
          <div>Created At</div>
          {/* <div></div> */}
        </Table.Header>

        <Table.Body
          data={guests}
          render={(guest) => <GuestRow guest={guest} key={guest.id} />}
        />
        <Table.Footer>
          <Pagination pageSize={pageSize} count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default GuestTable;
