import Main from '../pages/Main.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound.tsx';
import Offer from '../pages/Offer.tsx';
import Login from '../pages/Login.tsx';
import Favorites from '../pages/Favorites.tsx';
import PrivateRoute from './private-route.tsx';

type DisplayedPlaces = {
  displayedPlaces: number;
}

export default function App({displayedPlaces}: DisplayedPlaces): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main displayedPlaces={displayedPlaces}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
        <Route path="offer/:id" element={<Offer />}></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}