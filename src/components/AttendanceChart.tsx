"use client"

import Image from "next/image"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
    { name: 'Mon', present: 85, absent: 15 },
    { name: 'Tue', present: 92, absent: 8 },
    { name: 'Wed', present: 78, absent: 22 },
    { name: 'Thu', present: 88, absent: 12 },
    { name: 'Fri', present: 95, absent: 5 },
  ];
  
  

const AttendanceChart = () => {
    return (
        <div className="w-full f-full p-4 rounded-xl bg-white" >
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>

            <div className="w-full h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                        <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}  />  
                        <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
                        <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
                        <Bar
                            dataKey="present"
                            fill="#FAE27C"
                            legendType="circle"
                        />
                        <Bar
                            dataKey="absent"
                            fill="#C3EBFA"
                            legendType="circle"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default AttendanceChart