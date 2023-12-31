import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Booking from "./features/bookings/Booking";
import Cabins from "./pages/Cabins";
import CheckIn from "./pages/CheckIn";
import CreateCabin from "./features/cabins/CreateCabin";
import UpdateCabin from "./features/cabins/UpdateCabin";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Guests from "./pages/Guests";
import UpdateGuest from "./features/guests/UpdateGuest";
import CreateGuest from "./features/guests/CreateGuest";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 2 * 1000,
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoutes>
                    <AppLayout />
                  </ProtectedRoutes>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="bookings/:bookingId" element={<Booking />} />
                <Route path="checkin/:bookingId" element={<CheckIn />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="cabins/create" element={<CreateCabin />} />
                <Route path="cabins/edit" element={<UpdateCabin />} />
                <Route path="users" element={<Users />} />
                <Route path="guests" element={<Guests />} />
                <Route path="guests/create" element={<CreateGuest />} />
                <Route path="guests/edit" element={<UpdateGuest />} />
                <Route path="settings" element={<Settings />} />
                <Route path="account" element={<Account />} />
              </Route>

              <Route path="login" element={<Login />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
};

export default App;
