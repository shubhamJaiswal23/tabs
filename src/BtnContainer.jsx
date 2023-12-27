const BtnContainer = ({ user, currentItem, setCurrentItem }) => {
  const handleItem = (order) => {
    if (order === 3) {
      setCurrentItem(0);
    }

    if (order === 2) {
      setCurrentItem(1);
    }

    if (order === 1) {
      setCurrentItem(2);
    }
  };

  return (
    <div className="btn-container">
      {user.map(({ id, company, order }, index) => {
        return (
          <button
            key={id}
            className={index === currentItem ? 'active-btn job-btn' : 'job-btn'}
            onClick={() => handleItem(order)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
