import { useState, useEffect } from 'react';
import JobInfo from './JobInfo';
const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="title">
        <div className="loading"></div>
        <h2>loading...</h2>
      </div>
    );
  }

  return (
    <main>
      <JobInfo user={user} />
    </main>
  );
};
export default App;
