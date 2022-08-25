import HouseBoard from "./houseBoard";

export default function Lines(props) {
  return (
    <div style={{ display: "flex" }}>
      <HouseBoard black={props.black} />
      <HouseBoard black={!props.black} />
      <HouseBoard black={props.black} />
      <HouseBoard black={!props.black} />
      <HouseBoard black={props.black} />
      <HouseBoard black={!props.black} />
      <HouseBoard black={props.black} />
      <HouseBoard black={!props.black} />
    </div>
  );
}
