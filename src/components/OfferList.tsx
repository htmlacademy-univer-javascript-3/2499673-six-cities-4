import { getSortedOffers, listToCard, typeOfCardList } from '../utils';
import { useAppSelector } from '../hooks';
import { OfferType } from '../types';
import OfferCard from './OfferCard';

type OfferListProps = {
  offers: OfferType[];
  listType: typeOfCardList;
};

export default function OfferList({ offers, listType }: OfferListProps): JSX.Element {
  const chosenSortType = useAppSelector((state) => state.sortType);
  const type = listToCard.get(listType);
  return (
    <div className={(listType)}>
      {getSortedOffers(offers, chosenSortType)?.map((offer) => (
        <OfferCard key={offer.id} offer={offer} cardType={(type !== undefined) ? type : 'cities__card place-card'} />
      ))}
    </div>
  );
}
