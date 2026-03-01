import { useEffect, useState } from "react";
import { getPrayerTimes } from "../api/index";
import Loader from "../components/Loader";

export default function Prayer() {
  const [times, setTimes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPrayerTimes()
      .then((res) => setTimes(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Prayer Times</h1>
      {loading ? (
        <Loader />
      ) : times ? (
        <div className="grid gap-2">
          {Object.entries(times).map(([name, time]) => (
            <div key={name} className="p-2 border rounded">
              <span className="font-bold">{name}:</span> {time}
            </div>
          ))}
        </div>
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
}
