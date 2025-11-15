// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../data/mockApi";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function Dashboard() {
  const [kpis, setKpis] = useState([]);
  const [revenueTrend, setRevenueTrend] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData().then((data) => {
      setKpis(data.kpis);
      setRevenueTrend(data.revenueTrend);
      setPayments(data.payments);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="page">
        <p className="muted">Loading dashboard…</p>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p className="page-subtitle">
            Financial and subscription insights at a glance.
          </p>
        </div>
      </header>

      {/* KPI Cards */}
      <section className="kpi-grid">
        {kpis.map((kpi) => (
          <article key={kpi.label} className="kpi-card">
            <p className="kpi-label">{kpi.label}</p>
            <p className="kpi-value">{kpi.value}</p>
            <p
              className={`kpi-change ${
                kpi.change.startsWith("-") ? "neg" : "pos"
              }`}
            >
              {kpi.change} vs last month
            </p>
          </article>
        ))}
      </section>

      {/* Chart + Table */}
      <section className="grid-2">
        <div className="panel">
          <h2>Revenue Trend</h2>
          <div className="chart-area">
            <ResponsiveContainer width="100%" height={190}>
              <LineChart data={revenueTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ background: "#020617", border: "1px solid #111827" }}
                  labelStyle={{ color: "#e5e7eb" }}
                />
                <Line
                  type="monotone"
                  dataKey="mrr"
                  stroke="#22c55e"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="panel">
          <h2>Recent Payments</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.customer}</td>
                  <td>{p.amount}</td>
                  <td>
                    <span className={`badge badge-${p.status.toLowerCase()}`}>
                      {p.status}
                    </span>
                  </td>
                  <td>{p.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
