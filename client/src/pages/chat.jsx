import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Chat() {
  const [activeSection, setActiveSection] = useState(0);
  const sections = [
    {
      content: (
        <div className=''>
          <Link className="flex items-center justify-center my-4 mx-8" to="#">
            <svg className="w-5 h-5 fill-current" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.66459 5.74377C6.04572 4.9815 6.82481 4.5 7.67705 4.5H16.3229C17.1752 4.5 17.9543 4.98151 18.3354 5.74377L20.7625 10.5979C20.9187 10.9103 21 11.2548 21 11.6041V18.75C21 19.9926 19.9926 21 18.75 21H5.25C4.00736 21 3 19.9926 3 18.75V11.6041C3 11.2548 3.08133 10.9103 3.23754 10.5979L5.66459 5.74377ZM19.5 12.128C19.2654 12.0451 19.013 12 18.75 12H16.3846C15.1093 12 14.2778 13.0613 13.8659 13.8425C13.7678 14.0287 13.6446 14.2002 13.4991 14.3515C13.0963 14.7704 12.5564 15 12 15C11.4436 15 10.9037 14.7704 10.5009 14.3515C10.3554 14.2002 10.2322 14.0287 10.1341 13.8425C9.72224 13.0613 8.89069 12 7.61539 12H5.25C4.98702 12 4.73458 12.0451 4.5 12.128V11.6041C4.5 11.4877 4.52711 11.3728 4.57918 11.2687L7.00623 6.41459C7.13327 6.1605 7.39297 6 7.67705 6H16.3229C16.607 6 16.8667 6.1605 16.9938 6.41459L19.4208 11.2687C19.4729 11.3728 19.5 11.4877 19.5 11.6041V12.128Z" ></path> </g></svg>
          </Link>
        </div>
      ),
    },
    {
      content: (
        <div className=''>
          <Link className="flex items-center justify-center my-4 mx-8" to="#">
            <svg className="w-5 h-5 fill-current" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5 7.01472 7.01472 5 9.5 5C11.9853 5 14 7.01472 14 9.5C14 11.9853 11.9853 14 9.5 14C7.01472 14 5 11.9853 5 9.5Z" fill="#385898"></path> <path d="M14.3675 12.0632C14.322 12.1494 14.3413 12.2569 14.4196 12.3149C15.0012 12.7454 15.7209 13 16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C15.7209 6 15.0012 6.2546 14.4196 6.68513C14.3413 6.74313 14.322 6.85058 14.3675 6.93679C14.7714 7.70219 15 8.5744 15 9.5C15 10.4256 14.7714 11.2978 14.3675 12.0632Z" fill="#385898"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64115 15.6993C5.87351 15.1644 7.49045 15 9.49995 15C11.5112 15 13.1293 15.1647 14.3621 15.7008C15.705 16.2847 16.5212 17.2793 16.949 18.6836C17.1495 19.3418 16.6551 20 15.9738 20H3.02801C2.34589 20 1.85045 19.3408 2.05157 18.6814C2.47994 17.2769 3.29738 16.2826 4.64115 15.6993Z" fill="#385898"></path> <path d="M14.8185 14.0364C14.4045 14.0621 14.3802 14.6183 14.7606 14.7837V14.7837C15.803 15.237 16.5879 15.9043 17.1508 16.756C17.6127 17.4549 18.33 18 19.1677 18H20.9483C21.6555 18 22.1715 17.2973 21.9227 16.6108C21.9084 16.5713 21.8935 16.5321 21.8781 16.4932C21.5357 15.6286 20.9488 14.9921 20.0798 14.5864C19.2639 14.2055 18.2425 14.0483 17.0392 14.0008L17.0194 14H16.9997C16.2909 14 15.5506 13.9909 14.8185 14.0364Z" fill="#385898"></path> </g></svg>
          </Link>
        </div>
      ),
    },
    {
      content: (
        <div className=''>
          <Link className="flex items-center justify-center my-4 mx-8" to="#">
            <svg className="w-5 h-5 fill-current" fill="#ffffff" viewBox="0 0 24 24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="75.9,7.4 3.5,7.4 3.5,490 486.5,490 486.5,418 75.9,418 "></polygon> <polygon points="110.9,378.4 176.2,378.4 176.2,183.6 110.9,246.6 "></polygon> <polygon points="279.6,378.4 279.6,217 214.3,174.6 214.3,378.4 "></polygon> <polygon points="383,378.4 383,150.1 317.7,206.9 317.7,378.4 "></polygon> <polygon points="443.7,97.2 421.1,116.7 421.1,378.4 486.5,378.4 486.5,134.2 "></polygon> <path d="M443.3,0h-51.7c-6.2,0-11.7,4.2-13,10.2c-1.7,8.1,4.7,15.4,12.6,15.4h19.4L293.6,128l-89.4-58c-5.1-3.1-11.7-2.7-15.9,1.6 l-85.7,83.2c-5,4.9-5.2,12.9-0.4,18l0,0c4.9,5.2,13.1,5.4,18.2,0.5l78.4-76l89,57.5c4.7,3.1,11.3,2.7,15.6-1.2L430.5,42.8v21.8 c0,6.2,4.2,11.7,10.2,13c8.1,1.7,15.4-4.7,15.4-12.6V12.9C456.1,5.8,450.4,0,443.3,0z"></path> </g> </g> </g></svg>
          </Link>
        </div>
      ),
    },
  ];
  const chats = [
    {
      name: "Amit RG",
      time: "10m",
      tag: "Awesome Product!!",
      content: "product is Awesome!...",
      profilePicture: "https://example.jpg",
    },
    {
      name: "Amit RG",
      time: "10m",
      tag: "Awesome Product!!",
      content: "product is Awesome!...",
      profilePicture: "https://example.jpg",
    },

  ];

  const dummyData = [
    {
      email: 'amit@richpanel.com',
      firstName: 'Amit',
      lastName: 'RG',
    },
  ];

  const [activeChat, setActiveChat] = useState(0);

  const handleClick2 = (index) => {
    setActiveChat(index);
  };
  const handleClick = (index) => {
    setActiveSection(index);
  };


  return (
    <div className="flex h-screen antialiased text-gray-800">
      <div className="flex flex-row h-full w-full overflow-x-hidden">

        <div className="flex flex-col items-center max-w-[80px] h-screen overflow-hidden bg-[#385898]">
          <div className=''>
            <Link className="iteam mx-auto" to="#">
              <img className="w-6 my-4 " src="https://asset.brandfetch.io/idIegfyRr9/idez76iOYE.svg" />
            </Link>
          </div>
          {sections.map((section, index) => (
            <div
              key={index}
              className={`cursor-pointer ${activeSection === index ? 'bg-white text-[#385898]' : 'text-white'}`}
              onClick={() => handleClick(index)}
            >
              {section.content}
            </div>
          ))}

        </div>
        <div className="flex flex-col bg-white flex-shrink-0">
          <div className="flex flex-row py-3 items-center justify-center w-full">
            <div
              className="flex items-center justify-center"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="3.00015" y="7.00143" width="18" height="1.5" rx="0.75" fill="#374151"></rect> <rect x="2.99985" y="11.2514" width="15" height="1.5" rx="0.75" fill="#374151"></rect> <rect x="2.99985" y="15.4986" width="18" height="1.5" rx="0.75" fill="#374151"></rect> </g></svg>

            </div>
            <div className="font-bold text-2xl px-4 text-gray-600">Conversations</div>
          </div>


          <hr />


          <div className="flex flex-col w-auto md:w-[300px] flex-shrink-0">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`flex flex-col border border-gray-200 p-3 px-4 cursor-pointer transition-all duration-200 ease-in-out ${activeChat === index ? 'bg-gray-200' : 'bg-white'
                  }`}
                onClick={() => handleClick2(index)}
              >
                <div className="flex space-x-4">
                  <input type="checkbox" />
                  <div className="font-bold">{chat.name}</div>
                  <div className="flex text-gray-500 text-sm justify-end">
                    <div>{chat.time}</div>
                  </div>
                </div>
                <div className="mt-1">{chat.tag}</div>
                <div className="">{chat.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* chat section */}
        <div className="flex flex-col flex-auto h-full border-2 max-w-[50rem]">
          <div
            className="flex flex-col flex-auto flex-shrink-0 bg-gray-100 h-full p-4"
          >
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className=" gap-y-2">
                  <div className="col-start-1 col-end-8 p-3">
                    <div className="flex flex-row items-center">
                      <div
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-white flex-shrink-0"
                      >
                        <img src='https://example.com/profile_image.jpg'></img>
                      </div>
                      <div
                        className="relative ml-3 text-sm bg-white py-5 px-4 shadow rounded-lg"
                      >
                        <div>Hey How are you today?</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-white flex-shrink-0"
                      >
                        <img src='https://example.com/profile_image.jpg'></img>
                      </div>
                      <div
                        className="relative ml-3 text-sm bg-white py-5 px-4 shadow rounded-lg"
                      >
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Vel ipsa commodi illum saepe numquam maxime
                          speriores voluptate sit, minima perspiciatis.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-white flex-shrink-0"
                      >
                        <img src='https://example.com/profile_image.jpg'></img>
                      </div>
                      <div
                        className="relative mr-3 text-sm bg-indigo-100 py-5 px-4 shadow rounded-lg"
                      >
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-white flex-shrink-0"
                      >
                        <img src='https://example.com/profile_image.jpg'></img>
                      </div>
                      <div
                        className="relative ml-3 text-sm bg-white py-5 px-4 shadow rounded-lg"
                      >
                        <div>Lorem ipsum dolor sit amet !</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-white flex-shrink-0"
                      >
                        <img src='https://example.com/profile_image.jpg'></img>
                      </div>
                      <div
                        className="relative mr-3 text-sm bg-indigo-100 py-5 px-4 shadow rounded-lg"
                      >
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                        <div
                          className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                        >
                          Seen
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            <input
              type="text"
              className="flex flex-row item-center h-16 rounded-lg bg-white w-full px-4 outline-none focus:border-[2px] focus:border-[#385898]"
            />
          </div>

        </div>

        {/* profile section */}
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
      </div>
    </div>
  );
}

export default Chat;
