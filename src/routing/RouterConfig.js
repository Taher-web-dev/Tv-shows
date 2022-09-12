import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import CenterContainer from "components/containers/CenterContainer";
import { HOME, SHOW } from "constants/routes";
const Header = lazy(() => import("components/Header"));
const Home = lazy(() => import("pages/Home"));
const Show = lazy(() => import("pages/Show"));

const RouterConfig = () => {
  return (
    <Suspense>
      <Header />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={SHOW} element={<Show />} />
      </Routes>
    </Suspense>
  );
};

// const Loader = () => (
//   <CenterContainer>
//     <CircularProgress />
//   </CenterContainer>
// );

export default RouterConfig;
