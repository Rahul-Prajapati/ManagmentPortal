"use client"
import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', income: 4500, exp: 3000, amt: 2100 },
    { name: 'Feb', income: 5200, exp: 3100, amt: 2100 },
    { name: 'Mar', income: 4800, exp: 2900, amt: 1900 },
    { name: 'Apr', income: 5000, exp: 3200, amt: 1800 },
    { name: 'May', income: 5300, exp: 3400, amt: 1900 },
    { name: 'Jun', income: 5500, exp: 3600, amt: 1900 },
    { name: 'Jul', income: 6000, exp: 4000, amt: 2000 },
    { name: 'Aug', income: 6200, exp: 4100, amt: 2100 },
    { name: 'Sep', income: 5800, exp: 3700, amt: 2100 },
    { name: 'Oct', income: 6100, exp: 3900, amt: 2200 },
    { name: 'Nov', income: 6400, exp: 4200, amt: 2200 },
    { name: 'Dec', income: 7000, exp: 4500, amt: 2500 },
];

const FinanceChart = () => {
    return (
        <div className="w-full f-full p-4 rounded-xl bg-white">
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>

            <div className="w-full h-[400px]">
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                        <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}  />
                        <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20} />
                        <Tooltip
                            cursor={{ stroke: 'var(--color-border-2)' }}
                            contentStyle={{
                                backgroundColor: 'var(--color-surface-raised)',
                                borderColor: 'var(--color-border-2)',
                            }}
                        />
                         <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
                        <Line
                            type="monotone"
                            dataKey="income"
                            stroke="#C3EBFA"
                            strokeWidth={5}
                        />
                        <Line
                            type="monotone"
                            dataKey="exp"
                            stroke="#CFCEFF"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default FinanceChart