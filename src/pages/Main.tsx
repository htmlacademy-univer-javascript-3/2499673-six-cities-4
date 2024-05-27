import OfferList from '../components/OfferList';
import { Link } from 'react-router-dom';
import Map from '../components/map';
import { typeOfCardList } from '../utils';
import { useAppSelector } from '../hooks';
import CityList from '../components/city-list';
import { Header } from '../../components/header/header';
import { CardsSortingOptions } from '../../components/cards-sorting-options/cards-sorting-options';
import { getOffers } from '../../store/offers-data/selectors';
import { getCity } from '../../store/common-data/selectors';

export default function Main(): JSX.Element {
  const [city, offers] = useAppSelector((state) => [state.city, state.offers]);
  const chosenOffers = offers.filter((offer) => offer.city === city);
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList chosenCity={city}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{chosenOffers.length} places to stay in {city.title}</b>
              <CardsSortingOptions/>
              <OfferList offers={chosenOffers} listType={typeOfCardList.standart}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map points={points}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
