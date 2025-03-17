import React from "react";

const Users = ({ userdata }) => {
  return (
    <>
      <div className="ml-8 w-full h-[3rem] flex items-center justify-around">
        <div className="w-full h-full flex flex-col justify-start items-start">
          <h2 className="md:text-md text-sm font-bold text-white">{userdata.name}</h2>
          <p className="md:text-sm text-[12px] text-gray-500">{userdata.email}</p>
        </div>
        <div
          className={`
            w-fit px-2 py-[1px] flex items-center justify-center border-[1px] 
            rounded-full 
            ${userdata.status === "enrolled" ? "border-green-500" : "border-yellow-500"}
  `}
        >
          <p className="md:text-sm text-[10px] text-white">{userdata.status}</p>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="md:text-sm text-[12px] text-gray-400">{userdata.date}</p>
        </div>
      </div>
    </>
  );
};

export default Users;
