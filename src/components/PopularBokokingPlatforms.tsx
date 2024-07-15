const citiesWithLogo = [
  {
    imgPath:
      "https://flyingqueen.in/wp-content/uploads/2018/11/goibibo-logo.png",
    title: "Goibbo",
    address: "https://www.goibibo.com/",
  },
  {
    imgPath:
      "https://s3.rdbuz.com/Images/rdc/rdc-redbus-logo.webp",
    title: "RedBus",
    address: "https://www.redbus.in/",
  },
  {
    imgPath:
      "https://couponswala.com/blog/wp-content/uploads/2021/08/Abhibus.png",
    title: "abhibus",
    address: "https://www.abhibus.com/",
  },
  {
    imgPath:
      "https://logos-world.net/wp-content/uploads/2020/11/IRCTC-Symbol.png",
    title: "IRCTC",
    address: "https://www.irctc.co.in/nget/train-search",
  },

  {
    imgPath:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/OYO_Rooms_Logo.jpg",
    title: "OYO Rooms",
    address: "https://www.oyorooms.com/",
  },

  {
    imgPath:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Makemytrip_logo.svg",
    title: "Makemytrip",
    address: "https://www.makemytrip.com/",
  },

  {
    imgPath:
      "https://upload.wikimedia.org/wikipedia/commons/f/f8/EaseMyTrip_Logo.svg",
    title: "easemytrip",
    address: "https://www.easemytrip.com/",
  },
];

const PopularPlatforms = () => {
  return (
    <>
      <h1 className="text-2xl mb-4">Popular Booking platforms:</h1>
      <div className=" w-full align-middle justify-center items-center grid grid-cols-[repeat(5,1fr)] gap-2">
        {citiesWithLogo.map(
          (eachPlatform: {
            imgPath: string;
            title: string;
            address: string;
          }) => (
            <a
              href={eachPlatform.address}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                key={eachPlatform.title}
                className="text-gray-700 hover:text-yellow-400 text-center p-6 bg-white shadow-md outline outline-1 outline-gray-300 outline-offset-[-1.5rem] cursor-pointer hover:outline hover:outline-[0.2rem] hover:outline-amber-300 hover:outline-offset-0 hover:scale-90 transition-transform"
              >
                <img
                  src={eachPlatform.imgPath}
                  alt={eachPlatform.title}
                  className="p-2 h-20 hover:scale-90 transition-transform mx-auto"
                />
                <h3 className="py-2 text-xl">{eachPlatform.title}</h3>
              </div>
            </a>
          )
        )}
      </div>
    </>
  );
};

export default PopularPlatforms;
