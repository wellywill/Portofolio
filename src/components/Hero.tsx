import myProfilePic from "../assets/fotoportoc.png";
import iconR from "../assets/react.png";
import iconL from "../assets/laravel.png";
const Hero = () => {
  return (
    <section>
      <div className="relative mt-12 sm:mt-48">
        <img
          src={iconR}
          className="absolute w-8 top-20 z-10 sm:top-[2.8rem] sm:w-16 sm:right-[14rem] right-5 drop-shadow-md sm:drop-shadow-xl drop-shadow-cyan-500 sm:drop-shadow-cyan-500"
          alt=""
        />
        <img
          src={iconL}
          className="absolute w-7 top-20 sm:top-[2.8rem] sm:w-14 right-[6.8rem] sm:right-[25.5rem] drop-shadow-md drop-shadow-red-500 sm:drop-shadow-xl sm:drop-shadow-red-500"
          alt=""
        />
        <div
          className="hero max-h-60  sm:mt-24    flex justify-between  items-center p-6 sm:mx-40 rounded-lg" // Tambahan: flex, justify-between, items-center, p-6, rounded-lg
        >
          {/* Bagian Kiri: Teks */}
          <div className="text-white  ">
            {" "}
            <p className="text-[10px]">Halo,</p>
            <h1 className="text-lg md:text-4xl font-bold ">GAZALI HERE!</h1>
            <p className="text-[8px] md:text-lg">
              Build Your Website from Front-to-Back Fast, Clean, Scalable.
            </p>
            <button className="flex items-center hover:scale-105 hover:-translate-y-1  text-white text-xs sm:text-base mt-1 sm:mt-4 transition duration-300 ease-in-out  font-bold py-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 sm:size-8 text-red-500 drop-shadow-lg drop-shadow-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-light">ContactMe</span>
            </button>
          </div>

          {/* Bagian Kanan: Foto Anda */}
          <div className="flex-shrink-0 ">
            {" "}
            <img
              src={myProfilePic}
              alt="Foto Profil Saya"
              className="h-auto w-28 sm:w-56 sm:mr-12  mask-b-from-60% mask-b-to-100% " // Ukuran, bentuk bulat, object-cover untuk potong gambar, shadow
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
