import { useDigital } from "../useDigital";

const DigitalClock = () => {
  const time = useDigital();
  return <div>{time.toLocaleTimeString()}</div>;
};

export default DigitalClock;
