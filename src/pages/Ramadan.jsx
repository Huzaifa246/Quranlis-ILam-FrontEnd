import { useEffect, useState } from "react";
import { getRamadanInfo } from "../api/index";
import Loader from "../components/Loader";

export default function Ramadan() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRamadanInfo()
      .then((res) => setInfo(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Ramadan Tracker</h1>
      {loading ? (
        <Loader />
      ) : info ? (
        <div className="grid gap-2">
          <div className="p-2 border rounded">Current Day: <span className="font-bold">{info.day}</span></div>
          <div className="p-2 border rounded">Fasting Status: <span className="font-bold">{info.status}</span></div>
          {/* Add more Ramadan info as needed */}
        </div>
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
}
