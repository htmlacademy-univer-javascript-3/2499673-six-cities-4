import { OfferType } from '../types';
import Card from './cards';

type OfferListProps = {
  offerCards: OfferType[];
}

export default function OfferList({ offerCards }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offerCards.map((offer) => (
        <Card key={offer.id} offer={offer} {...offer} />
      ))}
    </div>
  );
}
