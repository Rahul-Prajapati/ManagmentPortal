import Image from "next/image"
import FinanceChart from "./FinanceChart"
const FinanceChartContainer = () => {
     return (
         <div className="w-full f-full p-4 rounded-xl bg-white">
             <div className="flex justify-between items-center">
                 <h1 className='text-lg font-semibold'>Students</h1>
                 <Image src="/moreDark.png" alt='' width={20} height={20} />
             </div>
             <FinanceChart />
          </div>
    )
}

export default FinanceChartContainer