import { useState } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Password dan konfirmasi password tidak sama!')
      return
    }
    alert(`Daftar dengan email: ${email}`)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: '#800000' }}
    >
      <div
        className="max-w-md w-full rounded-3xl overflow-hidden shadow-xl transform transition duration-300"
        style={{
          backgroundColor: '#f9eaea',
          border: '2px solid #800000',
          boxShadow: '0 10px 25px rgba(128, 0, 0, 0.5)',
        }}
      >
        <div className="p-6">
          <h2
            className="text-3xl font-extrabold text-center mb-2"
            style={{ color: '#800000' }}
          >
            Daftar Akun
          </h2>
          <p className="text-center text-sm mb-6" style={{ color: '#aa3333' }}>
            Silakan isi data untuk membuat akun baru
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#800000' }}>
                Email
              </label>
              <input
                type="email"
                placeholder="contoh@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition"
                style={{
                  borderColor: '#800000',
                  color: '#800000',
                  backgroundColor: '#fff0f0',
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#800000' }}>
                Password
              </label>
              <input
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition"
                style={{
                  borderColor: '#800000',
                  color: '#800000',
                  backgroundColor: '#fff0f0',
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#800000' }}>
                Konfirmasi Password
              </label>
              <input
                type="password"
                placeholder="Ulangi password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 transition"
                style={{
                  borderColor: '#800000',
                  color: '#800000',
                  backgroundColor: '#fff0f0',
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-lg font-semibold tracking-wide text-white text-sm shadow-md transition"
              style={{
                backgroundColor: '#800000',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#990000')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = '#800000')
              }
            >
              Daftar
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-700">
            Sudah punya akun?{' '}
            <a
              href="/signin"
              className="font-semibold hover:underline"
              style={{ color: '#800000' }}
            >
              Masuk di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
