import React, { Suspense } from "react";
import { ApiProvider } from "./providers/ApiContext";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/Loader";
import { router } from "./routes";

function App() {
  return (
    <>
      <ApiProvider>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </ApiProvider>
    </>
  );
}

export default App;
