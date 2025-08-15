import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  // Dummy data for illustration
  const conversionRates = [
    { country: "Italy", current: 44, previous: 53 },
    { country: "Japan", current: 32, previous: 55 },
    { country: "China", current: 33, previous: 41 },
    { country: "Canada", current: 52, previous: 64 },
    { country: "France", current: 13, previous: 22 }
  ];

  const orderTimeline = [
    {
      color: "#3575e8",
      label: "1983, orders, $4220",
      date: "08 Nov 2023 12:00 am"
    },
    {
      color: "#3cb655",
      label: "12 Invoices have been paid",
      date: "09 Apr 2024 12:00 am"
    },
    {
      color: "#3575e8",
      label: "Order #37745 from September",
      date: "12 Sep 2023 12:00 am"
    },
    {
      color: "#e88d44",
      label: "New order placed #XF-2356",
      date: "01 Jan 2024 12:00 am"
    },
    {
      color: "#e84444",
      label: "New order placed #XF-2346",
      date: "23 Apr 2024 12:00 am"
    }
  ];

  const bottomCards = [
    {
      icon: "🛍️",
      label: "Weekly sales",
      value: "714k",
      trend: "+2.6%",
      color: "#3575e8"
    },
    {
      icon: "👤",
      label: "New users",
      value: "1.35m",
      trend: "-0.1%",
      color: "#b25fed"
    },
    {
      icon: "🛒",
      label: "Purchase orders",
      value: "1.72m",
      trend: "+2.8%",
      color: "#edbd59"
    },
    {
      icon: "📨",
      label: "Messages",
      value: "234",
      trend: "+3.6%",
      color: "#ed7359"
    }
  ];

  const websiteVisits = {
    labels: [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun",
      "Jul", "Aug", "Sep"
    ],
    teamA: [42, 33, 20, 38, 67, 68, 28, 23, 54],
    teamB: [50, 70, 47, 66, 39, 31, 21, 69, 28]
  };

  // Radar Chart dummy data
  const radarData = [
    { subject: "English", s1: 90, s2: 20, s3: 60 },
    { subject: "Math", s1: 32, s2: 75, s3: 50 },
    { subject: "Chinese", s1: 100, s2: 60, s3: 30 },
    { subject: "Geography", s1: 20, s2: 90, s3: 70 },
    { subject: "Physics", s1: 58, s2: 40, s3: 10 },
    { subject: "History", s1: 60, s2: 30, s3: 80 }
  ];

  return (
    <div className="dashboard-root">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="db-top-row">
        {/* Conversion Rates */}
        <section className="db-card db-conversion">
          <h3>Conversion rates</h3>
          <span className="db-muted">(+43%) than last year</span>
          <div className="bar-chart">
            {conversionRates.map((item, idx) => (
              <div className="bar-row" key={item.country}>
                <span className="country">{item.country}</span>
                <div className="bars">
                  <div
                    className="bar bar-current"
                    style={{ width: `${item.current * 1.2}px` }}
                  >
                    {item.current}
                  </div>
                  <div
                    className="bar bar-prev"
                    style={{ width: `${item.previous * 1.2}px` }}
                  >
                    {item.previous}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Order Timeline */}
        <section className="db-card db-timeline">
          <h3>Order timeline</h3>
          <ul className="timeline-list">
            {orderTimeline.map((item, idx) => (
              <li className="timeline-item" key={idx}>
                <span
                  className="timeline-dot"
                  style={{ background: item.color }}
                />
                <span className="timeline-label">{item.label}</span>
                <div className="timeline-date">{item.date}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="db-bottom-row">
        {/* Cards */}
        <div className="db-card-group">
          {bottomCards.map((card, idx) => (
            <div className="db-small-card" key={card.label} style={{ borderColor: card.color }}>
              <span className="db-icon">{card.icon}</span>
              <span className="db-card-label">{card.label}</span>
              <span className="db-card-value">{card.value}</span>
              <span className="db-card-trend" style={{ color: card.trend.startsWith('+') ? "#0b8b48" : "#b31e2c" }}>
                {card.trend}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="db-below-row">
        {/* Radar Chart */}
        <section className="db-card db-radar-card">
          <h3>Current subject</h3>
          <RadarChart data={radarData} />
          <div className="db-radar-legend">
            <span style={{ color: "#3575e8" }}>● Series 1</span>
            <span style={{ color: "#e88d44" }}>● Series 2</span>
            <span style={{ color: "#446bee" }}>● Series 3</span>
          </div>
        </section>
        {/* Website Visits */}
        <section className="db-card db-visits-card">
          <h3>Website visits</h3>
          <span className="db-muted">(+43%) than last year</span>
          <BarChart data={websiteVisits} />
          <div className="db-bar-legend">
            <span style={{ color: "#3575e8" }}>● Team A</span>
            <span style={{ color: "#aed8ff" }}>● Team B</span>
          </div>
        </section>
      </div>
    </div>
  );
}

// Custom radar chart using SVG
function RadarChart({ data }) {
  // Calculate points (Assume center 100x100, radius 85)
  const center = { x: 100, y: 100 };
  const radius = 85;
  const angleStep = (2 * Math.PI) / data.length;

  function getCoords(val, i) {
    const angle = angleStep * i - Math.PI / 2;
    return {
      x: center.x + Math.cos(angle) * radius * (val / 100),
      y: center.y + Math.sin(angle) * radius * (val / 100)
    };
  }

  function polygon(seriesKey, color, opacity = 0.15) {
    const points = data.map((d, i) => getCoords(d[seriesKey], i));
    const path =
      points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(" ") +
      " Z";
    return (
      <path d={path} fill={color} fillOpacity={opacity} stroke={color} strokeWidth={2} />
    );
  }

  return (
    <svg width={200} height={200} style={{ display: "block" }}>
      {/* Axes & Labels */}
      {data.map((d, i) => {
        const end = getCoords(100, i);
        return (
          <g key={d.subject}>
            <line
              x1={center.x}
              y1={center.y}
              x2={end.x}
              y2={end.y}
              stroke="#ddd"
              strokeWidth={1}
            />
            <text
              x={center.x + Math.cos(angleStep * i - Math.PI / 2) * (radius + 16)}
              y={center.y + Math.sin(angleStep * i - Math.PI / 2) * (radius + 16)}
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="12"
              fill="#888"
            >
              {d.subject}
            </text>
          </g>
        );
      })}
      {/* Series */}
      {polygon("s1", "#3575e8", 0.15)}
      {polygon("s2", "#e88d44", 0.15)}
      {polygon("s3", "#446bee", 0.08)}
    </svg>
  );
}

// Bar chart for website visits (custom SVG)
function BarChart({ data }) {
  const max = Math.max(...data.teamA, ...data.teamB);
  return (
    <svg height={110} width={300}>
      {data.labels.map((label, i) => (
        <g key={label}>
          {/* Team A bar */}
          <rect
            x={22 + i * 30}
            y={100 - (data.teamA[i] / max) * 80}
            width={10}
            height={(data.teamA[i] / max) * 80}
            fill="#3575e8"
            rx="4"
          />
          {/* Team B bar */}
          <rect
            x={22 + i * 30 + 12}
            y={100 - (data.teamB[i] / max) * 80}
            width={10}
            height={(data.teamB[i] / max) * 80}
            fill="#aed8ff"
            rx="4"
          />
          {/* Labels */}
          <text
            x={22 + i * 30 + 11}
            y={108}
            textAnchor="middle"
            fontSize="10"
            fill="#444"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}
