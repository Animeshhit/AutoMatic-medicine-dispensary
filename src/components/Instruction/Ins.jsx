import InsRow from "../InstructionSection/InsRow";
import InsRowReverse from "../InstructionSection/InsRowReverse";
const Ins = () => {
  return (
    <>
      <InsRow
        Id={"1"}
        Ins="Doctor Will Generate A Prescription From This PlatForm."
      />
      <InsRowReverse
        Id={"2"}
        Ins="There Will Be a QR Code In Which All The Data Will Be Saved."
      />
      <InsRow
        Id={"3"}
        Ins="After That The Patient Will Put The QR code Into The Machine."
      />
      <InsRowReverse
        Id={"4"}
        Ins="Then The Machine will Read All The Data From The QR."
      />
      <InsRow
        Id={"5"}
        Ins="After That The Machine Will Dispense All The Medicines Accurately Within Few Seconds."
      />
    </>
  );
};

export default Ins;
