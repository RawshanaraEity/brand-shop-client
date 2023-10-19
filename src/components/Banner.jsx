const Banner = () => {
  return (
    <div className="mb-10">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/rxfRrFL/karsten-winegeart-CZt-K-E89omo-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">
              Wellcome To BiteOfTheBrands
            </h1>
            <p className="mb-5 w-full">
              Explore our Food And bevarage Website! Indulge in a gastronomic
              adventure with our diverse range of delectable products. From
              mouthwatering recipes to high-quality ingredients, our website is
              a paradise for food enthusiasts. Discover top class brands product
              and a delightful shopping experience, all in one place. Savor the
              taste of excellence where passion meets the plate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
