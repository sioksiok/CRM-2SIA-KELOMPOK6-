import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {
  const annualRevenueData = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Total Pendapatan Tahunan",
        data: [5000, 22000, 18000, 35000, 24000, 29000],
        borderColor: '#FFC107',
        backgroundColor: '#FFC107',
        tension: 0.4,
      },
    ],
  }

  const monthlyRevenueData = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Pendapatan Bulanan",
        data: [11000, 19000, 32000, 28000, 25000, 37000],
        borderColor: '#00BCD4',
        backgroundColor: '#00BCD4',
        tension: 0.4,
      },
    ],
  }

  const investments = [
    { name: 'Apple Store', value: '$54,000', return: '+16%', sector: 'E-commerce, Marketplace' },
    { name: 'Samsung Mobile', value: '$25,300', return: '-4%', sector: 'E-commerce, Marketplace' },
    { name: 'Tesla Motors', value: '$8,200', return: '+25%', sector: 'Electric Vehicles' },
  ]

  const serviceTrends = [
    { no: '01.', name: 'Trivago', price: '$520', return: '+5%' },
    { no: '02.', name: 'Canon', price: '$480', return: '+10%' },
    { no: '03.', name: 'Uber Food', price: '$350', return: '-3%' },
    { no: '04.', name: 'Nokia', price: '$940', return: '+2%' },
    { no: '05.', name: 'Tiktok', price: '$670', return: '-12%' },
  ]

  return (
    <div className="p-6 bg-[#f4f4f4] min-h-screen">
      {/* Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <p className="text-sm text-gray-600">Total Invested Amount</p>
          <h2 className="text-2xl font-bold">$150,000</h2>
        </div>
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <p className="text-sm text-gray-600">Number of Investments</p>
          <h2 className="text-2xl font-bold">1,250</h2>
        </div>
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <p className="text-sm text-gray-600">Rate of Return</p>
          <h2 className="text-2xl font-bold text-green-600">+5.80%</h2>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl p-4 shadow">
          <Line data={annualRevenueData} options={{ responsive: true }} />
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <Line data={monthlyRevenueData} options={{ responsive: true }} />
        </div>
      </div>

      {/* Investments and Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-4">My Investment</h3>
          {investments.map((inv) => (
            <div key={inv.name} className="bg-white rounded-xl p-4 mb-3 shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-lg">{inv.name}</h4>
                  <p className="text-sm text-gray-500">{inv.sector}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{inv.value}</p>
                  <p className={inv.return.includes('-') ? 'text-red-500' : 'text-green-600'}>
                    {inv.return}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-4">Trend Layanan Populer</h3>
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="p-3">SL No</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Return</th>
                </tr>
              </thead>
              <tbody>
                {serviceTrends.map((item) => (
                  <tr key={item.name} className="border-t">
                    <td className="p-3">{item.no}</td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.price}</td>
                    <td className={`p-3 ${item.return.includes('-') ? 'text-red-500' : 'text-green-600'}`}>{item.return}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
