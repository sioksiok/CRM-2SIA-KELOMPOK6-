import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {
  // Data summary cards
  const stats = [
    { label: "Pendapatan Hari Ini", value: "$53,000", percent: "+55%", color: "#800000" },
    { label: "Pengguna Hari Ini", value: "2,300", percent: "+3%", color: "#800000" },
    { label: "Klien Baru", value: "+3,462", percent: "-2%", color: "#800000" },
    { label: "Penjualan", value: "$103,430", percent: "+5%", color: "#800000" },
  ]

  // Data untuk grafik Penjualan Bulanan (Bar Chart)
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Penjualan (dalam ribuan $)",
        data: [12, 19, 14, 17, 22, 30, 28, 26, 32, 35, 40, 45],
        backgroundColor: "#800000", // merah
      },
    ],
  }

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#800000' } },
      title: { display: true, text: 'Penjualan Bulanan Tahun Ini', color: '#800000' },
    },
    scales: {
      x: { ticks: { color: '#800000' } },
      y: { ticks: { color: '#800000' } },
    },
  }

  // Data untuk grafik Pertumbuhan Pelanggan (Line Chart)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Jumlah Pelanggan",
        data: [50, 75, 120, 180, 220, 260, 300, 350, 400, 430, 460, 500],
        borderColor: "#800000", // merah
        backgroundColor: "rgba(128, 0, 0, 0.3)", // merah transparan
        fill: true,
        tension: 0.3,
        pointRadius: 4,
      },
    ],
  }

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top', labels: { color: '#800000' } },
      title: { display: true, text: 'Pertumbuhan Pelanggan Tahun Ini', color: '#800000' },
    },
    scales: {
      x: { ticks: { color: '#800000' } },
      y: { ticks: { color: '#800000' } },
    },
  }

  return (
    <div className="p-6 space-y-8 bg-white">
      {/* Statistik utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, percent }) => (
          <div
            key={label}
            className="rounded-xl shadow p-5 bg-white border border-[#800000]"
          >
            <p className="text-sm" style={{ color: '#800000' }}>{label}</p>
            <h2 className="text-2xl font-bold flex items-center gap-2" style={{ color: '#800000' }}>
              {value}
              <span className="text-xs font-semibold" style={{ color: '#800000' }}>{percent}</span>
            </h2>
          </div>
        ))}
      </div>

      {/* Grafik Penjualan Bulanan */}
      <div className="rounded-xl shadow p-6 bg-white border border-[#800000]">
        <Bar options={barOptions} data={barData} />
      </div>

      {/* Grafik Pertumbuhan Pelanggan */}
      <div className="rounded-xl shadow p-6 bg-white border border-[#800000]">
        <Line options={lineOptions} data={lineData} />
      </div>
    </div>
  )
}

export default Dashboard
