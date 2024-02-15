import React from 'react';

function DisconnectFb() {
    return (
        <div className=" mx-auto px-4 bg-[#385898] h-screen flex justify-center items-center ">
            <form className="w-full max-w-md bg-white rounded-3xl shadow-md px-12 py-16 space-y-4">
                <h1 className="text-xl text-center font-bold mb-8 text-gray-700">Facebook Page Integration</h1>
                <h1 className="text-xl text-center font-bold mb-8 text-gray-700">Integrated Page: <span className='text-black'>Amazon Business</span></h1>
                
                <button
                    type="submit"
                    className="w-full text-center px-4 py-3 bg-red-500 border border-transparent rounded-sm font-semibold text-xs text-white uppercase tracking-wide focus:outline-none"
                >
                    Delete Integration
                </button>
                <button
                    type="submit"
                    className="w-full text-center px-4 py-3 bg-[#385898] border border-transparent rounded-sm font-semibold text-xs text-white uppercase tracking-wide focus:outline-none"
                >
                    Reply To Messages
                </button>
                
            </form>
        </div>
    );
}

export default DisconnectFb;
