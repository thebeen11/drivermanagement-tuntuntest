import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { lazy, Suspense } from "react";
const LazyDriver = lazy(() => import("../pages/Driver"));
const LazyBeranda = lazy(() => import("../pages/Beranda"));
const LazyPickUp = lazy(() => import("../pages/Pickup"));
const LazyAddDriver = lazy(() => import("../pages/Driver/Form"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <LazyBeranda />
          </Suspense>
        ),
      },
      {
        path: "/driver-management",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <LazyDriver />
          </Suspense>
        ),
      },
      {
        path: "/driver-management/add",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <LazyAddDriver />
          </Suspense>
        ),
      },
      {
        path: "/pickup",
        element: (
          <Suspense fallback={<p>Loading.....</p>}>
            <LazyPickUp />
          </Suspense>
        ),
      },
    ],
  },
]);
