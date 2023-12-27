import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Duties = ({ user, currentItem }) => {
  const { duties } = user[currentItem];
  const id = uuidv4();

  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div className="job-desc" key={index}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
