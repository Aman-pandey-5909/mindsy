
const AdminOverview = () => {
  // Dummy data (replace with backend counts later)
  const stats = {
    users: 250,
    psychiatrists: 18,
    appointments: 430,
    donations: 12500,
    reviews: 320,
  };

  const cardStyle =
    "bg-white shadow-sm border rounded-xl p-6 flex flex-col items-center justify-center";

  return (
    <div className="w-[900px] mx-auto my-12 text-text-black">
      <h1 className="text-3xl font-semibold mb-8">Admin Dashboard Overview</h1>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-6">

        {/* Users */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-3xl font-bold mt-2">{stats.users}</p>
        </div>

        {/* Psychiatrists */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold">Psychiatrists</h2>
          <p className="text-3xl font-bold mt-2">{stats.psychiatrists}</p>
        </div>

        {/* Appointments */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold">Appointments</h2>
          <p className="text-3xl font-bold mt-2">{stats.appointments}</p>
        </div>

        {/* Donations */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold">Total Donations (₹)</h2>
          <p className="text-3xl font-bold mt-2">₹{stats.donations}</p>
        </div>

        {/* Reviews / Feedback */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold">Total Feedback</h2>
          <p className="text-3xl font-bold mt-2">{stats.reviews}</p>
        </div>

      </div>
    </div>
  );
};

export default AdminOverview;
