// src/pages/Customers.jsx
import { useEffect, useMemo, useState } from "react";
import { fetchCustomers } from "../data/mockApi";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    plan: "Starter",
    mrr: "",
    status: "Active",
  });

  useEffect(() => {
    fetchCustomers().then((data) => setCustomers(data));
  }, []);

  const filtered = useMemo(() => {
    return customers.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        String(c.mrr).includes(search);
      const matchesStatus =
        statusFilter === "all" ||
        c.status.replace(" ", "").toLowerCase() === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [customers, search, statusFilter]);

  function handleAddCustomer(e) {
    e.preventDefault();
    if (!newCustomer.name || !newCustomer.mrr) return;

    setCustomers((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newCustomer.name,
        plan: newCustomer.plan,
        mrr: Number(newCustomer.mrr),
        status: newCustomer.status,
      },
    ]);

    setNewCustomer({ name: "", plan: "Starter", mrr: "", status: "Active" });
    setShowModal(false);
  }

  return (
    <div className="page">
      <header className="page-header">
        <div>
          <h1>Customers</h1>
          <p className="page-subtitle">
            Manage subscription accounts and monthly recurring revenue.
          </p>
        </div>
        <button className="primary-btn" onClick={() => setShowModal(true)}>
          New Customer
        </button>
      </header>

      <div className="toolbar">
        <input
          className="input"
          type="search"
          placeholder="Search by name or MRR…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="input"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All statuses</option>
          <option value="active">Active</option>
          <option value="pastdue">Past due</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Plan</th>
              <th>MRR</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.plan}</td>
                <td>${c.mrr}</td>
                <td>
                  <span
                    className={`badge badge-${c.status
                      .replace(" ", "")
                      .toLowerCase()}`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={4} className="muted">
                  No customers match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Add Customer</h2>
            <form className="modal-form" onSubmit={handleAddCustomer}>
              <label>
                Name
                <input
                  className="input"
                  value={newCustomer.name}
                  onChange={(e) =>
                    setNewCustomer((p) => ({ ...p, name: e.target.value }))
                  }
                />
              </label>

              <label>
                Plan
                <select
                  className="input"
                  value={newCustomer.plan}
                  onChange={(e) =>
                    setNewCustomer((p) => ({ ...p, plan: e.target.value }))
                  }
                >
                  <option>Starter</option>
                  <option>Pro</option>
                  <option>Enterprise</option>
                </select>
              </label>

              <label>
                MRR (USD)
                <input
                  className="input"
                  type="number"
                  min="0"
                  value={newCustomer.mrr}
                  onChange={(e) =>
                    setNewCustomer((p) => ({ ...p, mrr: e.target.value }))
                  }
                />
              </label>

              <label>
                Status
                <select
                  className="input"
                  value={newCustomer.status}
                  onChange={(e) =>
                    setNewCustomer((p) => ({ ...p, status: e.target.value }))
                  }
                >
                  <option>Active</option>
                  <option>Past due</option>
                  <option>Canceled</option>
                </select>
              </label>

              <div className="modal-actions">
                <button
                  type="button"
                  className="topbar-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="primary-btn">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
