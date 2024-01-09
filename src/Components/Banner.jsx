import banner from "../assets/food.png"
const Banner = () => {
    return (

        <div  className="hero h-[80vh]" style={{backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">

            <button className="btn btn-secondary mt-24">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;