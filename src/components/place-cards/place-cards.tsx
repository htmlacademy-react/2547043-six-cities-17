import { useState } from 'react';
import { AppRoute } from '../../const';
import { Offers } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';


type PlaceCardsProps = {
  offers: Offers;
  pageLocation: AppRoute;
};

function PlaceCards({ offers, pageLocation }: PlaceCardsProps): JSX.Element {
  const [, setActiveCard] = useState(offers[0]);
  return (
    <div className={`${pageLocation === AppRoute.Root && 'cities__places-list places__list tabs__content' || pageLocation === AppRoute.Favorites && 'favorites__places'}`}>
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} pageLocation={pageLocation} updateActiveCard={() => setActiveCard(offer)} />)}
    </div>
  );
}

export default PlaceCards;
