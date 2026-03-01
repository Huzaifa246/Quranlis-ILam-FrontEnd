import { useEffect, useState } from "react";
import { getQuran } from "../api/index";
import Button from "../components/Button";
import Loader from "../components/Loader";

const lineOptions = ["16-lines", "15-lines", "13-lines"];

export default function Quran() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLines, setSelectedLines] = useState("16-lines");

  useEffect(() => {
    getQuran(selectedLines)
      .then((res) => setData(res.data))
      .finally(() => setLoading(false));
  }, [selectedLines]);

  const handleLineChange = (opt) => {
    setLoading(true);
    setSelectedLines(opt);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quran ({selectedLines})</h1>
      <div className="mb-4 flex gap-2">
        {lineOptions.map((opt) => (
          <Button key={opt} onClick={() => handleLineChange(opt)}>
            {opt}
          </Button>
        ))}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid gap-4">
          {data.map((ayah) => (
            <div key={ayah.id} className="p-4 border rounded shadow">
              <div className="font-bold">{ayah.surah}:{ayah.ayah}</div>
              <div className="text-lg mb-2">{ayah.text}</div>
              {ayah.translation && (
                <div className="text-gray-600">{ayah.translation}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
