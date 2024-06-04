import { Review } from '../types';
import ReviewItem from './review-item';
import CommentForm from '../components/comment-form';
import { AuthorizationStatus } from '../config';
import { useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../store/user-process/selectors';

type ReviewsListProps = {
  reviews: Review[];
};

const MAXIMUM_REVIEWS_COUNT = 10;

export default function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const sortedReviews = reviews.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const limitedReviews = sortedReviews.slice(0, MAXIMUM_REVIEWS_COUNT);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{limitedReviews.length}</span></h2>
      <ul className="reviews__list">
        {limitedReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <CommentForm />}
    </section>
  );
}
