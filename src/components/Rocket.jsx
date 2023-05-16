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
    <div>
      <img src={images} alt="rocket" />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        {!reserved && (
        <button className="test-btn" type="button" onClick={() => { handleReserve(id); }}>
          Reserve Rocket
        </button>
        )}
        {reserved && (<span>Reserved</span>)}
        {reserved && (
          <button type="button" className="test-btn2" onClick={() => { handleUnReserve(id); }}>
            Cancel reservation
          </button>
        ) }

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
