import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteUserFailure, deleteUserSuccess, signOutUserStart, } from '../redux/user/userSlice';

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch(`http://localhost:7000/api/auth/signout`);
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  };
  return (

    <div>
      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gray-100 text-gray-800 w-screen">
            <div className="px-5 xl:px-12 py-3 flex w-full items-center">
              <a className="text-xl font-bold font-heading" href="/">
               
                <span>MyApp</span>

              </a>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 items-center">
                <li><Link className="hover:text-gray-900 " to="/connect">Connect</Link></li>
                <li><Link className="hover:text-gray-900 " to="disconnect">Disconnect</Link></li>
              </ul>
              <div className="hidden xl:flex space-x-5 items-center">


                {/* Dashboard*/}
                <div className="flex w-full flex-nowrap ml-3 items-center">

                  {currentUser ? (
                    <button onClick={handleSignOut} className='bg-[#385898] text-white p-2 px-3 rounded-lg'>Signout</button>

                  ) : (
                    <Link to="/sign-in">
                      <button className='bg-[#385898] text-white p-2 px-3 rounded-lg'> Sign in</button>
                    </Link>
                  )}

                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  )
}

export default Navbar