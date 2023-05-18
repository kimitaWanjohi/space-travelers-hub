import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, unReserveRocket } from '../redux/rockets/rocketSlice';

const Rocket = ({ id, name, description, images, reserved }) => {
  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleUnReserve = (id) => {
    dispatch(unReserveRocket(id));
  };

  return (
    <div className="flex gap-6 mt-3 pt-3">
      <img className="w-1/4" src={images} alt="rocket" />
      <div className="">
        <h3 className="font-bold mb-0.5 text-lg">{name}</h3>
        <p className="font-normal pt-2 text-base mb-3 text-justify leading-6">
          {reserved && <span className="px-3 py-1 mr-2 bg-teal-500 rounded-md border border-gray-500 text-white text-sm">Reserved</span>}
          {description}
        </p>
        {!reserved && (
          <button
            className="font-normal text-base p-2 text-white rounded bg-blue-600"
            type="button"
            onClick={() => {
              handleReserve(id);
            }}
          >
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button
            type="button"
            className="font-normal text-base p-2 mt-1 rounded text-gray-500 border border-double border-gray-500"
            onClick={() => {
              handleUnReserve(id);
            }}
          >
            Cancel reservation
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Rocket;
