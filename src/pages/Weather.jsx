import { useLocation } from "react-router";

const Weather = () => {
  const value = useLocation();
  const place = value.state.location;
  console.log(place);
  return <div>This is Weather Details Page</div>;
};

export default Weather;
