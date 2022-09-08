import imageBanner from '../../../../assets/images/home/headphone-banner.png';

export const PromotionBanner = () => {
  return (
    <>
      <div className="promotion-banner">
        <div className="promotion-banner__title">
          <h2>LOREM</h2>
          <h2>IPSUM</h2>
        </div>

        <div className="promotion-banner__description">
          <h2 className="description__subtitle">LOREM</h2>
          <h2 className="description__title">LOREM IPSUM</h2>
          <p className="description__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            ad, architecto assumenda consectetur consequuntur dolorum ea error
            esse impedit nulla optio perferendis perspiciatis quidem quos
            sapiente velit, voluptatibus? Facere, ipsum.
          </p>

          <button
            type="button"
            className="mt-3 text-red-100 bg-white rounded-full font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
            SHOP
          </button>
        </div>
        <img className="promotion-banner__image" src={imageBanner} alt="" />
      </div>
    </>
  );
};
