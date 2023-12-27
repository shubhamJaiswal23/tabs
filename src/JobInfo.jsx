import Duties from './Duties';
import BtnContainer from './BtnContainer';

const JobInfo = ({ user }) => {
  const { title, dates, company } = user[0];

  return (
    <section className="jobs-center">
      <BtnContainer user={user} />
      <article className="job-info">
        <h3>{title}</h3>
        <span className="job-company">{company}</span>
        <p className="job-date">{dates}</p>
        <Duties user={user} />
      </article>
    </section>
  );
};
export default JobInfo;
