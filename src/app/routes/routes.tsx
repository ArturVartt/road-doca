import { createBrowserRouter } from "react-router";
import App from "../../App";
import IntroPage from "../../pages/documentations/intro";
import Layout from "../../widgets/layout/ui/layout";
import StartingToDive from "../../pages/documentations/starting-to-dive";

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
  {
    path: "/starting",
    element: (
      <Layout>
        <StartingToDive />
      </Layout>
    ),
    errorElement: <div>404</div>,
  },
]);

export default router;
