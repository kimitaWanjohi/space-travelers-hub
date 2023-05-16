import { useSelector } from "react-redux";

export default function UserMissions() {
  const missions = useSelector((state) => state.missions.missions);
  return (
    <div>
      {missions.map((mission) => {
        if (mission.reserved) {
          return (
            <div
              key={mission.mission_id}
              className="flex justify-between items-center border-b border-gray-200 py-4"
            >
              <div>
                <h4 className="text-lg">{mission.mission_name}</h4>
              </div>
              <hr className="my-4" />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
