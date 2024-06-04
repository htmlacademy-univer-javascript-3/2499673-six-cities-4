import { getSortedOffers, listToCard, typeOfCardList } from '../utils';
import { useAppSelector } from '../hooks';
import { Offer } from '../types';
import OfferCard from './offer-card';
import { getSortType } from '../store/common-data/selectors';

type OfferListProps = {
  offers: Offer[];
  listType: typeOfCardList;
};

export default function OfferList({ offers, listType }: OfferListProps): JSX.Element {
  const chosenSortType = useAppSelector(getSortType);
  const type = listToCard.get(listType);
  return (
    <div className={(listType)}>
      {getSortedOffers(offers, chosenSortType)?.map((offer) => (
        <OfferCard key={offer.id} offer={offer} cardType={(type !== undefined) ? type : 'cities__card place-card'} />
      ))}
    </div>
  );
}
