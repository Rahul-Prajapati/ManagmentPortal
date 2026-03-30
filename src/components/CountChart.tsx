"use client"

import { RadialBarChart, RadialBar, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const CountChart = ({ boys, girls }: { boys: number; girls: number }) => {

    const data = [
        {
            name: 'Total',
            uv: boys+girls,
            fill: '#FFF',
        },
        {
            name: 'Girls',
            uv: girls,
            fill: '#FAE27C',
        },
        {
            name: 'Boys',
            uv: boys,
            fill: '#C3EBFA',
        }
    ]

    return (
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
    )
}

export default CountChart