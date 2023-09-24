import VectorTwo from "../../assets/VectorTwo.svg";
const InsRowReverse = (Props) => {
  return (
    <>
      <div className="w-full h-auto py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 justify-between">
            <div className="left_container w-full md:w-2/5 bg-zinc-800 rounded-md h-72 flex items-center justify-center">
              <p className="text-white text-2xl">Image 360 X 480</p>
            </div>
            <div className="right_container w-full md:w-3/5">
              <h2
                data-id={Props.Id}
                className={`text-xl md:text-3xl beforeClass font-bold leading-relaxed`}
              >
                {Props.Ins}
              </h2>
              <img
                className="mt-6 hidden md:block w-2/4 mx-auto"
                src={VectorTwo}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsRowReverse;
