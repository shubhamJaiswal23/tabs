import Duties from './Duties';
import BtnContainer from './BtnContainer';

const JobInfo = ({ user, currentItem, setCurrentItem }) => {
  const { title, dates, company } = user[currentItem];

  return (
    <section className="jobs-center">
      <BtnContainer
        user={user}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <article className="job-info">
        <h3>{title}</h3>
        <span className="job-company">{company}</span>
        <p className="job-date">{dates}</p>
        <Duties user={user} currentItem={currentItem} />
      </article>
    </section>
  );
};
export default JobInfo;
