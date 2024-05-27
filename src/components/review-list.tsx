import { ReviewType } from '../types';
import ReviewItem from './review-item';
import CommentForm from '../components/comment-form';

type ReviewsListProps = {
  reviews: ReviewType[];
};

export default function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      <CommentForm />
    </section>
  );
}

