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
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Pendapatan Tahunan (dalam juta)",
        data: [120, 150, 170, 210, 240, 280],
        borderColor: '#800000',
        backgroundColor: '#800000',
        tension: 0.4,
      },
    ],
  }

  const monthlyRevenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"],
    datasets: [
      {
        label: "Pendapatan Bulanan (2024)",
        data: [18, 22, 20, 25, 27, 30],
        borderColor: '#800000',
        backgroundColor: '#800000',
        tension: 0.4,
      },
    ],
  }

  const services = [
    { name: 'Facial Glow', revenue: 'Rp 12.000.000', growth: '+15%', kategori: 'Perawatan Wajah' },
    { name: 'Laser Treatment', revenue: 'Rp 9.500.000', growth: '+8%', kategori: 'Perawatan Kulit' },
    { name: 'Botox Injection', revenue: 'Rp 7.800.000', growth: '+10%', kategori: 'Anti-Aging' },
  ]

  const serviceTrends = [
    { no: '01.', name: 'Acne Treatment', price: 'Rp 350.000', return: '+12%' },
    { no: '02.', name: 'Chemical Peeling', price: 'Rp 500.000', return: '+9%' },
    { no: '03.', name: 'Microneedling', price: 'Rp 700.000', return: '+6%' },
    { no: '04.', name: 'Hair Removal Laser', price: 'Rp 800.000', return: '+5%' },
    { no: '05.', name: 'Anti Aging', price: 'Rp 1.200.000', return: '+11%' },
  ]

  return (
    <div className="p-6 bg-[#800000] min-h-screen">
      {/* Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <p className="text-sm text-gray-600">Total Pendapatan</p>
          <h2 className="text-2xl font-bold">Rp 280.000.000</h2>
        </div>
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <p className="text-sm text-gray-600">Jumlah Layanan Aktif</p>
          <h2 className="text-2xl font-bold">32 Layanan</h2>
        </div>
        <div className="bg-white rounded-xl p-4 shadow text-center">
          <p className="text-sm text-gray-600">Tingkat Kepuasan</p>
          <h2 className="text-2xl font-bold text-green-600">98%</h2>
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

      {/* Services and Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-4">Layanan Terlaris</h3>
          {services.map((svc) => (
            <div key={svc.name} className="bg-white rounded-xl p-4 mb-3 shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-lg">{svc.name}</h4>
                  <p className="text-sm text-gray-500">{svc.kategori}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{svc.revenue}</p>
                  <p className={svc.growth.includes('-') ? 'text-red-500' : 'text-green-600'}>
                    {svc.growth}
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
                  <th className="p-3">No</th>
                  <th className="p-3">Nama</th>
                  <th className="p-3">Harga</th>
                  <th className="p-3">Pertumbuhan</th>
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
