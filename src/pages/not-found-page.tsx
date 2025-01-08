import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div>
      <h1>Page Not Found<br></br>404</h1>
      <Link to={'/'}>
      Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFoundPage;
