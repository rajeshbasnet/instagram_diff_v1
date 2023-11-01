import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./globals.css";
import { Home } from "./pages";
import SigninForm from "./_auth/SigninForm";
import SignupForm from "./_auth/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./pages/RootLayout";

const App: React.FC = () => {
  const router = createBrowserRouter([
    /** Public Routes */
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "sign-in",
          element: <SigninForm />,
        },
        {
          path: "sign-up",
          element: <SignupForm />,
        },
      ],
    },
  ]);

  return (
    <main className="flex h-screen">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
