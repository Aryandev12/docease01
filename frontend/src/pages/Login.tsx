import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  {CurrentUserContext} from '../context/userContext'

const Login = ({ closeModal, openRegisterModal }: { closeModal: () => void; openRegisterModal: () => void; }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {setCurrentUser}=useContext(CurrentUserContext)
  

  const handleLogin = async () => {
    // Perform login authentication here
    // For simplicity, just check if both username and password are provided

    if (email.trim() === '' || password.trim() === '') {
      setError('Please provide both username and password.');
      return ;

    } 
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Login successful:", response.data);
      const loginUser = await response.data.data
      setCurrentUser(loginUser)
      navigate(`/profile/${loginUser.id}/dashboard`);
      
    } catch (error) {
      setError("Login failed. Please Check your email  and password .");
      console.error("Login failed:", error);
      
    }
  };
  const handleOpenRegisterModal = () => {
    openRegisterModal();
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mb-4 w-full"
        />

        <button onClick={handleOpenRegisterModal} className="bg-purple-600 text-white px-4 py-2 rounded-md" style={{ float: 'left' }}>
           New User ?
        </button>
        <div className="flex justify-end">
          <button onClick={handleLogin} className="bg-purple-600 text-white px-4 py-2 rounded-md">
            Login
          </button>
          <button onClick={closeModal} className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;



