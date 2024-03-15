import './Visited.css';
import PropTypes from 'prop-types'
const Visited = ({Name,img}) => {
    return (
      <div className='float'>
        <img height={"30px"} width={"50px"} style={{ borderRadius: "5px" }} src={img} alt="" />
        <span>{Name}</span>
      </div>
    );
  };

  Visited.propTypes=
  {
    Name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }
export default Visited;