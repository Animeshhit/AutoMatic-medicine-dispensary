import HeroImage from "../../assets/heroimage.svg";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="w-full h-full mt-12 mb-12 sm:mb-24 sm:mt-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-y-8 justify-between">
            {/* left container  */}
            <div className="left_container w-full md:w-3/5">
              <h1
                style={{ lineHeight: "1.5" }}
                className="leading-relaxed font-bold text-xl md:text-3xl text-zinc-900 transition"
              >
                Hey, Explore This Smart Medicine Dispencer Machine And Avoid
                Waiting In Long Line
              </h1>
              <p className="mt-6 text-sm text-zinc-500 ">
                If You Are a Doctor Click On Genarte a New PressCription button
                and If not You Can Learn You to Operate a
                <span className="text-zinc-900 font-bold">
                  {" "}
                  Auto Drag Dispensary Machine
                </span>
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                <NavLink
                  to="/gen-new"
                  href="./generate.html"
                  className="inline-flex items-center justify-center gap-2  py-2.5 px-8 bg-zinc-900 text-white text-sm md:text-base rounded-full hover:bg-zinc-600 transition"
                >
                  <span>Generate Presscription</span>
                </NavLink>
                <button
                  href="./generate.html"
                  className="inline-flex items-center justify-center gap-2  py-2 px-8  text-zinc-800 border-2 border-zinc-600 hover:border-zinc-800 hover:text-zinc-600 text-sm md:text-base rounded-full transition"
                >
                  <span>Let's Learn</span>
                </button>
              </div>
            </div>
            {/* right container  */}
            <div className="right_container w-full md:w-2/5">
              <img
                src={HeroImage}
                alt="Auto Drag Dispensary Machine"
                className="object-contain h-52 sm:h-auto w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
