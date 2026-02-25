function Signup() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="border p-3 block mb-4 w-80"
      />

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

      <p className="mb-2 font-semibold">Select Role</p>

      <div className="flex gap-4 mb-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Restaurant
        </button>

        <button className="bg-green-500 text-white px-4 py-2 rounded">
          NGO
        </button>

        <button className="bg-orange-500 text-white px-4 py-2 rounded">
          Volunteer
        </button>
      </div>

      <button className="bg-green-600 text-white px-6 py-3 rounded">
        Create Account
      </button>
    </div>
  );
}

export default Signup;