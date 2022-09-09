import { Banner } from './components/Banner/Banner';
import { Products } from './components/Products/Products.jsx';
import { ServicesBanner } from './components/ServicesBanner/ServicesBanner';
import { PromotionBanner } from './components/PromotionBanner/PromotionBanner';
import { BestSeller } from '../BestSeller/BestSeller';

export const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <ServicesBanner />
      <PromotionBanner />
      <BestSeller />
    </>
  );
};
