# 💼 Case Study: Improving Subscription Transparency & Reducing Churn  
**SaaS Financial & Customer Analytics Dashboard for Subscription-Based Businesses**

## ✅ Executive Summary  
A growing subscription-based business struggled to understand its core financial health.  
Revenue, churn, customer activity, and payment trends were scattered across multiple systems with no centralized analytics layer.

Operational challenges became clear:

- Monthly Recurring Revenue (MRR) lacked clear trend visibility  
- Churn patterns were difficult to diagnose  
- Customer status (Active, Past Due, Canceled) wasn’t monitored in real time  
- Payment records required manual tracking and reconciliation  
- Executives needed a single dashboard for fast decision-making  

To solve this, a **SaaS Financial Analytics Dashboard** was developed to unify subscription metrics, customer insights, and revenue trends into one clean, modern, React-powered interface.

---

# ✅ Step 1 — Subscription Data Consolidation & KPI Modeling  
Core business metrics were modeled using mock subscription, revenue, and churn data.  
This structured model enabled realistic, industry-standard SaaS KPIs.

### ✅ Core SaaS KPIs Modeled  
- **Monthly Recurring Revenue (MRR)**  
- **Active Subscribers**  
- **Churn Rate**  
- **Average Revenue per User (ARPU)**  
- **Customer Lifecycle States** (Active, Past Due, Canceled)  
- **Payment History & Status Codes**  

### 📊 SaaDash Dashboard Overview  
![SaaDash Dashboard](https://github.com/YSayaovong/saas-dashboard/blob/main/assets/dashboard.PNG)

The dashboard gives stakeholders a unified, transparent view of subscription performance and real-time business health.

---

# ✅ Step 2 — Revenue Trends & Customer Insights  
Once the KPI architecture was built, several meaningful insights became immediately visible:

1. **MRR Growth** showed consistent upward movement  
2. **Active subscriber count** gained stability  
3. **Churn Rate** revealed specific periods where cancellations spiked  
4. Payment status data showed which customers were falling behind  

### 📈 Revenue Trend Visualization  
A clean, interactive chart displays revenue changes over time, helping leadership quickly identify growth phases and performance dips.

### 📄 Recent Payments Table  
A sortable, color-coded table highlights recent transactions, payment amounts, and statuses (Paid, Pending, Failed).

---

# ✅ Step 3 — Customer Management & Filtering Tools  
A complete **Customers module** was added to improve visibility into subscriber activity.

### Features included:
- **Search bar** to filter customers by name, MRR, or plan  
- **Status filter** for Active, Past Due, and Canceled users  
- Color-coded **status badges** for instant recognition  
- Structured table for customer plan, MRR, and payment health  

### 🧾 Customer List Interface  
Users can quickly diagnose which accounts are healthy, at risk, or churned.

---

# ✅ Step 4 — UI/UX Enhancements  
To improve usability and presentation, the dashboard includes:

- **Dark/Light mode toggle**  
- **Responsive layout** for desktop + mobile  
- **Sidebar navigation** with Dashboard, Customers, and Settings  
- Consistent spacing, typography, and component styling  
- Reusable card components for KPIs  

These enhancements align the experience with modern SaaS tools.

---

# ✅ Step 5 — Deployment & GitHub Documentation  
The project is structured for clean deployment and developer handoff.

### Deployment Steps  
- Built with **Vite + React** for high performance  
- Deployed using **Vercel** for instant global hosting  
- Configured clean, simple routes using **React Router DOM**  

### Files Included  
- `src/pages/` — Dashboard, Customers, Settings  
- `src/components/` — Layout, navigation, theme components  
- `src/data/` — Mock SaaS dataset used for analytics  

---

# ✅ Business Impact (for a real SaaS company)  
If implemented in a real production environment, this dashboard would:

- Provide real-time visibility into revenue and churn  
- Reduce reporting time by **30–40%**  
- Identify at-risk customers faster  
- Make subscription forecasting data-driven  
- Improve decision-making for pricing, retention, and growth  

---

# ✅ Tools & Technologies  
- React (Vite)  
- React Router DOM  
- CSS Modules / Custom Styles  
- Chart.js or Recharts  
- Git / GitHub  
- Vercel Deployment  

---

# ✅ Summary  
This SaaS Analytics Dashboard demonstrates how consolidating subscription data into a unified interface transforms visibility and decision-making for subscription-based companies.  
With centralized KPIs, customer insights, and revenue trend analysis, SaaS leaders gain a powerful command center for monitoring performance and driving long-term growth.
