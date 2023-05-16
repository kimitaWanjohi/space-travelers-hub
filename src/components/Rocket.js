import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { reserveRocket } from '../redux/rockets/rocketSlice';

const Rocket = ({ id, name, description, images }) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
    setIsClicked(true);
  };

  return (
    <div>
      <img src={images[0]} alt="rocket" />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <button className={isClicked ? 'hidden' : "test-btn"} type="button" onClick={() => { handleReserve(id); }}>Reserve Rocket</button>
        <button type="button" className="test-btn2">Cancle reservation</button>
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
