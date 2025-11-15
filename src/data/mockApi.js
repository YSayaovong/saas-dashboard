// src/data/mockApi.js

export function fetchDashboardData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        kpis: [
          { label: "Monthly Recurring Revenue", value: "$42,890", change: "+8.3%" },
          { label: "Active Customers", value: "2,144", change: "+3.2%" },
          { label: "Churn Rate", value: "3.1%", change: "-0.4%" },
          { label: "Avg Revenue per User", value: "$19.98", change: "+1.4%" },
        ],
        revenueTrend: [
          { month: "Jun", mrr: 32000 },
          { month: "Jul", mrr: 34000 },
          { month: "Aug", mrr: 36500 },
          { month: "Sep", mrr: 38800 },
          { month: "Oct", mrr: 41500 },
          { month: "Nov", mrr: 42890 },
        ],
        payments: [
          { id: "INV-1102", customer: "BluePeak LLC", amount: "$420.00", status: "Paid", date: "Nov 20" },
          { id: "INV-1101", customer: "SignalCore", amount: "$1,190.00", status: "Paid", date: "Nov 19" },
          { id: "INV-1100", customer: "MangoMedia", amount: "$320.00", status: "Pending", date: "Nov 18" },
          { id: "INV-1099", customer: "SkyLabs Inc.", amount: "$890.00", status: "Failed", date: "Nov 18" },
        ],
      });
    }, 400);
  });
}

export function fetchCustomers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "BluePeak LLC", plan: "Pro", mrr: 290, status: "Active" },
        { id: 2, name: "SignalCore", plan: "Enterprise", mrr: 1890, status: "Active" },
        { id: 3, name: "MangoMedia", plan: "Starter", mrr: 59, status: "Past due" },
        { id: 4, name: "SkyLabs Inc.", plan: "Pro", mrr: 420, status: "Canceled" },
      ]);
    }, 400);
  });
}
