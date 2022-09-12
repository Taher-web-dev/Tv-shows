import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HOME, SHOW, WATSHLIST } from 'constants/routes';

const Header = lazy(() => import('components/Header'));
const Home = lazy(() => import('pages/Home'));
const Show = lazy(() => import('pages/Show'));

const RouterConfig = () => (
  <Suspense>
    <Header />
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={SHOW} element={<Show />} />
      <Route path={WATSHLIST} element={<HOME />} />
    </Routes>
  </Suspense>
);

// const Loader = () => (
//   <CenterContainer>
//     <CircularProgress />
//   </CenterContainer>
// );

export default RouterConfig;
