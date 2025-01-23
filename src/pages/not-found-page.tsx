import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

function NotFoundPage(): JSX.Element {
  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      margin: '-125px 0 0 -125px',
    }}
    >
      <h1 style={{textAlign: 'center'}}>Page Not Found<br></br>404</h1>
      <Link to={AppRoute.Root}
        style={{
          display: 'block',
          transform: 'skew(14deg)',
          backgroundColor: '#4481c3',
          color: '#fff',
          marginLeft: '40px',
        }}
        className = 'locations__item locations__item-link tabs__item tabs__item'
      >
      Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFoundPage;
