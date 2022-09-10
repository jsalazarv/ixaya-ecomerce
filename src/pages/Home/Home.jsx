import { Banner } from './components/Banner/Banner';
import { Products } from './components/Products/Products.jsx';
import { ServicesBanner } from './components/ServicesBanner/ServicesBanner';
import { PromotionBanner } from './components/PromotionBanner/PromotionBanner';
import { BestSeller } from '../BestSeller/BestSeller';
import promotionalBannerImage1 from '../../assets/images/home/headphone-banner-1.png';
import promotionalBannerImage2 from '../../assets/images/home/apple-watch.png';

export const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <ServicesBanner />
      <PromotionBanner color="bg-red-100" image={promotionalBannerImage1} />
      <BestSeller />
      <PromotionBanner color="bg-green-100" image={promotionalBannerImage2} />
    </>
  );
};
