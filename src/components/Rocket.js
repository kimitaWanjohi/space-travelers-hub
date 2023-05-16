import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { reserveRocket, unReserveRocket } from '../redux/rockets/rocketSlice';

const Rocket = ({ id, name, description, images }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [buttonDisplay, setButtonDisplay] = useState(true);

  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
    setIsClicked(true);
    setButtonDisplay(false);
  };

  const handleUnReserve = (id) => {
    dispatch(unReserveRocket(id));
    setIsClicked(false);
    setButtonDisplay(true);
  };

  return (
    <div>
      <img src={images[0]} alt="rocket" />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <button className={isClicked ? 'hidden' : "test-btn"} type="button" onClick={() => { handleReserve(id); }}>Reserve Rocket</button>
        <button type="button" className={buttonDisplay ? 'hidden' : "test-btn"} onClick={() => { handleUnReserve(id); }}>Cancel reservation</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Rocket;
