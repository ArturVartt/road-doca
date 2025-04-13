import { createBrowserRouter } from "react-router";
import App from "../../App";
import IntroPage from "../../pages/documentations/intro";
import Layout from "../../shared/layout/ui/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <div>404</div>,
  },
  {
    path: "/intro",
    element: (
      <Layout>
        <IntroPage />
      </Layout>
    ),
    errorElement: <div>404</div>,
  },
]);

export default router;
