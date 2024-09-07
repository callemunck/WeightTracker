import NavBar from './components/NavBar';
import Intro from './components/Intro';
import useFetchUser from './fetch/useFetchUser';

function App() {
  const { user, loading, error } = useFetchUser(3);

  return (
    <div className="bg-slate-50">
      <NavBar />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {user ? <Intro user={user} /> : <div>No user data available</div>}
      {user ? <Intro user={user} /> : <div>No user data available</div>}
      {user ? <Intro user={user} /> : <div>No user data available</div>}
      {user ? <Intro user={user} /> : <div>No user data available</div>}
      {user ? <Intro user={user} /> : <div>No user data available</div>}
    </div>
  );
}

export default App;
