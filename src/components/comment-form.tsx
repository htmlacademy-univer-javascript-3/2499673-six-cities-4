import { Fragment, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';
import { getChosenOffer } from '../../store/offer-data/selectors';

const isSubmitInvalid = (
  formData.review.length < MINIMUM_COMMENT_CHARACTERS ||
  formData.review.length > MAXIMUM_COMMENT_CHARACTERS ||
  formData.rating === null
);

export default function CommentForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '1',
    review: '',
  });
  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const resetForm = () => {
    setFormData({
      rating: null,
      review: '',
    });
  };


  const ratingTitles: { [key: number]: string } = {
    5: 'excellent',
    4: 'good',
    3: 'not bad',
    2: 'badly',
    1: 'terribly'
  };

  const getRatingTitle = (rating: number): string => ratingTitles[rating];

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
      {[5, 4, 3, 2, 1].map((rating) => (
          <Fragment key={rating}>
            <input className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio" checked={Number(formData.rating) === rating} onChange={handleFieldChange} />
            <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={getRatingTitle(rating)}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
    </form>
  );
}
