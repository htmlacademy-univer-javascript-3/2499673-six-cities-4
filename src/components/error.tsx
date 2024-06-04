import {useAppSelector} from '../hooks';
import { getError } from '../store/common-data/selectors';
import './error.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}
