import React from "react";
import Chart from "./Chart";
import { stat } from "fs";
import Users from "./Users";

const Landing = () => {
    const userdata = [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', status: 'enrolled', date: '2025-03-17' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', status: 'registered', date: '2025-03-16' },
        { id: 3, name: 'Alice Johnson', email: 'alicejohnson@example.com', status: 'enrolled', date: '2025-03-15' },
        { id: 4, name: 'Bob Brown', email: 'bobbrown@example.com', status: 'registered', date: '2025-03-14' },
        { id: 5, name: 'Charlie Davis', email: 'charliedavis@example.com', status: 'enrolled', date: '2025-03-13' },
        { id: 6, name: 'David Wilson', email: 'davidwilson@example.com', status: 'registered', date: '2025-03-12' },
        { id: 7, name: 'Ella Martinez', email: 'ellamartinez@example.com', status: 'enrolled', date: '2025-03-11' },
        { id: 8, name: 'Frank White', email: 'frankwhite@example.com', status: 'registered', date: '2025-03-10' },
        { id: 9, name: 'Grace Hall', email: 'gracehall@example.com', status: 'enrolled', date: '2025-03-09' },
        { id: 10, name: 'Henry Adams', email: 'henryadams@example.com', status: 'registered', date: '2025-03-08' },
        { id: 11, name: 'Isla Nelson', email: 'islanelson@example.com', status: 'enrolled', date: '2025-03-07' },
        { id: 12, name: 'Jack Moore', email: 'jackmoore@example.com', status: 'registered', date: '2025-03-06' },
        { id: 13, name: 'Kara Scott', email: 'karascott@example.com', status: 'enrolled', date: '2025-03-05' },
        { id: 14, name: 'Leo Harris', email: 'leoharris@example.com', status: 'registered', date: '2025-03-04' },
        { id: 15, name: 'Mia Clark', email: 'miaclark@example.com', status: 'enrolled', date: '2025-03-03' },
        { id: 16, name: 'Noah Lewis', email: 'noahlewis@example.com', status: 'registered', date: '2025-03-02' }
    ];
    

  return (
    <>
      <div className="md:h-screen h-fit w-screen bg-[url('/bgimg.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="relative h-[95%] w-[98%] bg-black opacity-80 backdrop-blur-2xl flex flex-col items-center justify-center">
        <div className="md:hidden flex w-full h-full items-center justify-center my-10 "> 
                    <h1 className="text-white text-2xl">User Management Dashboard</h1>
                </div>
            <div className="md:flex w-full h-[10%] hidden items-center justify-center">
                <div className="w-1/2 h-full flex items-center justify-start"> 
                    <h1 className="text-white text-2xl">User Management Dashboard</h1>
                </div>
                <div className="w-1/2 h-full flex items-center justify-start"> 
                    <h1 className="text-white text-2xl ml-8">User Data</h1>
                </div>
            </div>
            <div className="w-full h-[80%] flex flex-wrap md:flex-nowrap items-center justify-center">
                <div className="md:w-1/2 w-[90%] h-full flex md:mb-0 mb-10 justify-center items-center">
                    <Chart />
                </div>
                <div className="md:hidden flex w-full h-full items-center justify-center my-10 "> 
                    <h1 className="text-white text-2xl">User Data</h1>
                </div>
                <div className="ml-7 md:w-1/2 -[90%] h-3/4 flex justify-center items-center flex-wrap overflow-y-scroll">
                    {userdata.map((user) => (
                    <>
                    <Users key={user.id} userdata={user} />
                    <hr className="w-[95%] opacity-25 my-3" />
                    </>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
