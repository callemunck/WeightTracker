const NavBar: React.FC = () => {

  return (
    <nav className="fixed top-5 left-5 right-5 rounded-lg h-20 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 shadow-lg flex items-center">
      <div className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold">
        Weight Tracker
      </div>
      <div className="fixed left-10 font-extrabold">
        Welcome guest!
      </div>
      <div className="ml-auto mr-10">
            <div className="flex items-center">
              <a
                href={`/profile`}
                className="hover:text-slate-600 hover:bg-blue-400 shadow-sm text-lg bg-blue-500 rounded-lg flex items-center justify-center h-10 w-20 ml-4"
              >
                Profile
              </a>
            </div>
      </div>
    </nav>
  );
};

export default NavBar;
