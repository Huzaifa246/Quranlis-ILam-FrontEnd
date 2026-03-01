import { useState } from "react";
import { calculateZakat } from "../api/index";
import Loader from "../components/Loader";
import Button from "../components/Button";

export default function Zakat() {
  const [form, setForm] = useState({ amount: "", gold: "", silver: "" });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    calculateZakat(form)
      .then((res) => setResult(res.data))
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Zakat Calculator</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="number"
          name="amount"
          placeholder="Cash/Assets Amount"
          value={form.amount}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="gold"
          placeholder="Gold (grams)"
          value={form.gold}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="silver"
          placeholder="Silver (grams)"
          value={form.silver}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <Button type="submit">Calculate</Button>
      </form>
      {loading && <Loader />}
      {result && (
        <div className="mt-4 p-4 border rounded bg-green-50">
          <div>Zakat Due: <span className="font-bold">{result.zakat}</span></div>
        </div>
      )}
    </div>
  );
}
