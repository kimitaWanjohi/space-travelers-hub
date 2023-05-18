import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchRockets } from "../redux/rockets/rocketSlice";
import Rocket from "./Rocket";

const RocketList = () => {
  const { rockets, isLoading, error } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="mt-6 mb-8">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {rockets && (
        <ul>
          {rockets.map((rocket) => (
            <Rocket
              key={rocket.id}
              id={rocket.id}
              name={rocket.name}
              description={rocket.description}
              images={rocket.flickr_images[0]}
              reserved={rocket.reserved}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RocketList;
