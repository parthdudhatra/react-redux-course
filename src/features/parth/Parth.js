import { useSelector } from "react-redux";

const Parth = () => {
  const count = useSelector((states) => states.counterme.count);
  return <div>
    <span className='value'>parth :{count}</span>
  </div>;
};

export default Parth;
