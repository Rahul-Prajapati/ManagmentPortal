"use client"

import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
    {
        name: 'Total',
        uv: 100,
        fill: '#FFF',
    },
    {
        name: 'Girls',
        uv: 45,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        uv: 55,
        fill: '#C3EBFA',
    }
]

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const CountChart = () => {
    return (
        // lg:w-2/3 flex flex-col gap-8
        <div className="w-full f-full p-4 rounded-xl bg-white">
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>

            <div className="relative w-full h-[200px]">
                <ResponsiveContainer>
                    <RadialBarChart
                        cx="50%"
                        cy="50%"
                        innerRadius="40%"
                        outerRadius="100%"
                        barSize={32}
                        data={data}
                    >
                        <RadialBar
                            background
                            dataKey="uv"
                        />
                        <Tooltip />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt="" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>

            <div className="flex justify-center gap-16">
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-SkyLight rounded-full' />
                    <h1 className='font-bold'>1234</h1>
                    <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
                </div>

                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-Yellow rounded-full' />
                    <h1 className='font-bold'>1234</h1>
                    <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
                </div>

            </div>
        </div>
    )
}

export default CountChart