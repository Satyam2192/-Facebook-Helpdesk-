import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const dummyData = [
  {
    email: 'amit@richpanel.com',
    firstName: 'Amit',
    lastName: 'RG',
  },
];

const CustomerDetails = () => {
  return (
    <div className="flex justify-center ">
      <div className="">
        <div className='bg-white border p-4'>
          <div className="flex flex-col justify-center items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200"></div>
            <div className="text-left">
              <h3 className="text-xl font-medium text-gray-800 mt-2">Amit RG</h3>
              <p className="text-sm text-gray-500 inline-block"><span className="bg-gray-500 w-2 h-2 rounded-full inline-block mr-1"></span>Offline </p>

            </div>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            <button className=" border-[3px] font-medium rounded-lg px-4 py-2 w-28">
              Call
            </button>
            <Link to="/profile" className=" border-[3px] font-medium rounded-lg px-4 py-2 w-28">
              Profile
            </Link>
          </div>
        </div>

        <div className="p-4 bg-gray-100 min-h-[69vh]">
          <div className='bg-white border-2 p-3 rounded-xl'>
            <h4 className="text-base font-medium text-gray-800">Customer details</h4>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-sm text-gray-900 text-right font-medium">{dummyData[0].email}</p>
              <p className="text-sm text-gray-500">First Name</p>
              <p className="text-sm text-gray-900 text-right font-medium">{dummyData[0].firstName}</p>
              <p className="text-sm text-gray-500">Last Name</p>
              <p className="text-sm text-gray-900 text-right font-medium">{dummyData[0].lastName}</p>
              <Link to="/more-details" className="text-blue-700 hover:underline mt-1">
              View more details
            </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
