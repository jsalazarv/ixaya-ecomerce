import { Banner } from './components/Banner/Banner';
import { Products } from '../Products/Products';
import { ServicesBanner } from './components/ServicesBanner/ServicesBanner';

export const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <ServicesBanner />
    </>
  );
};
