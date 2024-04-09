import { ReviewType } from '../types';

type ReviewProps = {
  review: ReviewType;
};

export default function ReviewItem({ review }: ReviewProps): JSX.Element {
  const { id, date, author, avatar, rating, description } = review;
  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name"> {author} </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating / 5 * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {description}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
}
