import imageBanner from '../../../../assets/images/home/headphone-banner.png';

export const Banner = () => {
  return (
    <>
      <div className="wrap">
        <div className="banner">
          <div className="banner__content">
            <h2 className="banner__content__brand">Sony</h2>
            <h2 className="banner__content__subtitle">Wireless</h2>
            <h1 className="banner__content__title">
              <b>HEADPHONE</b>
            </h1>
            <div className="text-center lg:text-left md:mt-6">
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Shop By Category
              </button>
            </div>
            <img className="banner__content__image" src={imageBanner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
