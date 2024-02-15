import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';

function Login() {
    const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('http://localhost:7000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
    return (
        <div className=" mx-auto px-4 bg-[#385898] h-screen flex justify-center items-center ">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-3xl shadow-md p-6">
                <h1 className="text-2xl text-center font-bold mb-8 text-gray-700">Login</h1>

                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm rounded-md w-full focus:ring-[#385898] focus:border-[#385898] block px-4 py-2 text-gray-700 border border-gray-300 focus:outline-none"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium mb-2 text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="shadow-sm rounded-md w-full focus:ring-[#385898] focus:border-[#385898] block px-4 py-2 text-gray-700 border border-gray-300 focus:outline-none"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6 flex items-center">
                    <input
                        type="checkbox"
                        id="remember-me"
                        name="remember-me"
                        className="mr-2 h-4 w-4 text-[#385898] focus:ring-[#385898] focus:ring-offset-indigo-200 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="text-sm font-medium text-gray-700">
                        Remember me
                    </label>
                </div>
                <button
                    disabled={loading}
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full text-center px-4 py-3 bg-[#385898] border border-transparent rounded-sm font-semibold text-xs text-white uppercase tracking-wide focus:outline-none"
                >
                    {loading ? 'Loading...' : 'Login'}
                </button>
                <p className="mt-6 text-center text-sm text-gray-700">
                    New to MyApp?<Link to="/signup" className="text-[#385898] font-medium"> Sign Up </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
