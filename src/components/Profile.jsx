import UserMissions from "./UserMissions";

export default function Profile() {
  return (
    <div className="container mx-auto my-8 h-screen">
      <div className="flex justify-center h-full">
        <div className="w-full max-w-md">
          <h3 className="text-2xl font-bold">My Missions</h3>
          <hr className="my-4" />
          <UserMissions />
        </div>
        <div className="w-full max-w-md">
          <h3 className="text-2xl font-bold">My Rockets</h3>
          <hr className="my-4" />
        </div>
      </div>
    </div>
  );
}
