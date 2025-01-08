import { AppRoute, AuthStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page';
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page';
import NotFoundPage from '../../pages/not-found-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../private-route.tsx/private-route';
import OfferPage from '../../pages/offer-page';


type AppProps = {
  cardsCount: number;
}

function App({cardsCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root}>
          <Route index element={<MainPage cardsCount={cardsCount} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authStatus={AuthStatus.NoAuth}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferPage />}>
            {/* <Route path=':id'/> WIP */}
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
