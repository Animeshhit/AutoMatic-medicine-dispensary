import VectorOne from "../../assets/VectorOne.svg";
const InsRow = (Props) => {
  return (
    <>
      <div className="w-full h-auto py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="left_container w-full md:w-3/5">
              <h2
                data-id={Props.Id}
                className={`text-xl md:text-3xl beforeClass ${
                  Props.Id == "5" ? "anotherClass" : ""
                } font-bold leading-relaxed`}
              >
                {Props.Ins}
              </h2>
              <img
                className="mt-6 hidden md:block w-2/4 mx-auto"
                src={VectorOne}
              />
            </div>
            <div className="right_container w-full md:w-2/5 bg-zinc-800 rounded-md h-72 flex items-center justify-center">
              <p className="text-white text-2xl">Image 360 X 480</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsRow;
