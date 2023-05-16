import { useDispatch } from "react-redux";
import { joinMission, leaveMission } from "../redux/missions/slice";

export default function Mission({ mission }) {
  const dispatch = useDispatch();

  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2">{mission.mission_name}</td>
      <td className="px-4 py-2">{mission.description}</td>
      <td className="px-4 py-2 w-[10rem]">
        {mission.reserved ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active member
          </span>
        ) : (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Not a member
          </span>
        )}
      </td>
      <td className="px-4 py-2 w-[10rem]">
        {mission.reserved ? (
          <button
            type="button"
            onClick={() => dispatch(leaveMission(mission.mission_id))}
            className="px-3 py-1 rounded-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            onClick={() => dispatch(joinMission(mission.mission_id))}
            className="px-3 py-1 rounded-md border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white"
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
}
