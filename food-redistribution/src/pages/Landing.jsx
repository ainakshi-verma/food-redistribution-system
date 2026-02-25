function Landing() {
  return (
    <div className="px-10 py-16">

      <h1 className="text-5xl font-bold mb-6">
        Food Waste Redistribution System
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Connecting restaurants, NGOs, and volunteers to reduce food waste.
      </p>

      <div className="flex gap-6">

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Join as Restaurant
        </button>

        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Join as NGO
        </button>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
          Join as Volunteer
        </button>

      </div>

    </div>
  );
}

export default Landing;