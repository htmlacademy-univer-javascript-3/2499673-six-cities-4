import { Link } from 'react-router-dom';

export default function PageNotFound(): JSX.Element {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Страница не найдена</p>
      <p><Link to="/">Вернуться на главную страницу</Link></p>
    </div>
  );
}