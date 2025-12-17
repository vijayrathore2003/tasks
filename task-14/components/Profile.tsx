import { useNavigate } from "react-router";
import { useAuthStore } from "../store/store";
import { useEffect } from "react";
import { checkLogin, logoutUser } from "../api";


function Profile() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    useAuthStore.getState().clearUser();
    logoutUser(user?.email!);
    navigate('/login');
  }

  useEffect(() => {
    const loggedInUser = checkLogin();

    if(loggedInUser) {
      useAuthStore.getState().setUser(loggedInUser);
    }
    else {
      navigate('/login');
    }
  }, [user]);

  return (
    <div className="mx-auto relative z-3 block w-fit h-screen">
        <h2 className="text-2xl font-bold mx-auto block w-fit">Welcome to your Profile</h2>
        {user && 
          <p className="mt-5 text-lg">Logged in as: <span className="font-medium">{user.email}</span></p>
        }
        <button
          onClick={handleLogout}
          className="hover:shadow-form mt-10 w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Logout
        </button>
    </div>
  )
}

export default Profile