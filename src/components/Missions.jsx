import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMissions } from "../redux/missions/slice";

export default function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const loading = useSelector((state) => state.missions.loading);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        missions.map((mission) => (
          <div key={mission.mission_id}>
            <h1>{mission.mission_name}</h1>
            <p>{mission.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
