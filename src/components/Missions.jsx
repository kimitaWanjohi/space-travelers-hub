import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMissions } from "../redux/missions/slice";
import Mission from "./Mission";

export default function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const loading = useSelector((state) => state.missions.loading);
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className="container mx-auto py-8 w-full">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="table-auto max-w-[90%] mx-auto bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Mission</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <Mission key={mission.mission_id} mission={mission} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
