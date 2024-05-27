import { listToCard, typeOfCardList } from '../config';
import { OfferType } from '../types';
import OfferCard from './OfferCard';

type OfferListProps = {
  offers: OfferType[];
  listType: typeOfCardList;
};

export default function OfferList({offers, listType}: OfferListProps): JSX.Element {
  const type = listToCard.get(listType);
  return (
    <div className={(listType)}>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} cardType={(type !== undefined) ? type : 'cities__card place-card'}/>
      ))}
    </div>
  );
}
