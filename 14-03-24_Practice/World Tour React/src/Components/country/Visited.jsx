import './Visited.css';
const Visited = ({Name,img}) => {
    return (
      <div className='float'>
        <img height={"30px"} width={"50px"} style={{ borderRadius: "5px" }} src={img} alt="" />
        <span>{Name}</span>
      </div>
    );
  };

export default Visited;