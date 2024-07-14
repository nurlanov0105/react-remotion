import { Routes, Route } from "react-router";
import React, { Suspense } from "react";

const Main = React.lazy(() => import("@/pages/main"));
const Editor = React.lazy(() => import("@/pages/editor"));
const NotFound = React.lazy(() => import("@/pages/not-found"));
const Loader = React.lazy(() => import("@/entities/loader"));

const Routers = () => {
   return (
      <Suspense fallback={<Loader />}>
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Suspense>
   );
};

export default Routers;
