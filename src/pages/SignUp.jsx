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
        className="max-w-md w-full rounded-3xl"  // rounded lebih besar
        style={{
          backgroundColor: '#f9eaea',
          border: '2px solid #800000',
          boxShadow: '0 8px 20px rgba(128, 0, 0, 0.4)', // shadow buat efek melengkung
        }}
      >
        <h2
          className="text-2xl font-bold mb-4 text-center"
          style={{ color: '#800000' }}
        >
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 rounded border"
            style={{
              borderColor: '#800000',
              color: '#800000',
              backgroundColor: '#fff0f0',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 rounded border"
            style={{
              borderColor: '#800000',
              color: '#800000',
              backgroundColor: '#fff0f0',
            }}
          />
          <input
            type="password"
            placeholder="Konfirmasi Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-3 py-2 rounded border"
            style={{
              borderColor: '#800000',
              color: '#800000',
              backgroundColor: '#fff0f0',
            }}
          />
          <button
            type="submit"
            className="w-full py-2 rounded transition"
            style={{
              backgroundColor: '#800000',
              color: 'white',
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
      </div>
    </div>
  )
}

export default SignUp
