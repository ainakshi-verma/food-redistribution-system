function Login() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="border p-3 block mb-4 w-80"
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-3 block mb-4 w-80"
      />

      <button className="bg-blue-600 text-white px-6 py-3 rounded">
        Login
      </button>
    </div>
  );
}

export default Login;