const BtnContainer = ({ user }) => {
  return (
    <div className="btn-container">
      {user.map(({ id, company }) => {
        return (
          <button key={id} className="job-btn">
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
