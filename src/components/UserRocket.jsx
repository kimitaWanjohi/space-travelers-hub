import { useSelector } from 'react-redux';

const UserRocket = () => {
  const rockets = useSelector((store) => store.rockets.rockets);
  return (
    <div>
      {rockets.map((rocket) => {
        if (rocket.reserved) {
          return (
            <div key={rocket.id} className="flex justify-between items-center border-b border-gray-200 py-4">
              <div><h4 className="text-lg">{rocket.name}</h4></div>
              <hr className="my-4" />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default UserRocket;
