export default function Mission({ mission }) {
  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2">{mission.mission_name}</td>
      <td className="px-4 py-2">{mission.description}</td>
      <td className="px-4 py-2">{mission.reserved ? "Active" : "Inactive"}</td>
      <td className="px-4 py-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          type="button"
        >
          Join
        </button>
      </td>
    </tr>
  );
}
