import React from 'react';

function ConnectFb() {
    return (
        <div className=" mx-auto px-4 bg-[#385898] h-screen flex justify-center items-center ">
            <form className="w-full max-w-md bg-white rounded-3xl shadow-md px-16 py-16">
                <h1 className="text-xl text-center font-bold mb-8 text-gray-700">Facebook Page Integration</h1>
                <button
                    type="submit"
                    className="w-full text-center px-4 py-3 bg-[#385898] border border-transparent rounded-sm font-semibold text-xs text-white uppercase tracking-wide focus:outline-none"
                >
                    Connect Page
                </button>
                
            </form>
        </div>
    );
}

export default ConnectFb;
