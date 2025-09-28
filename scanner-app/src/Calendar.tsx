import React, { useState } from "react";
import "./Calendar.css";

interface CalendarProps {
  value: Date;
  onChange: (date: Date) => void;
}

const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export const Calendar: React.FC<CalendarProps> = ({ value, onChange }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(value));

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Erster Tag im Monat
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sonntag, 1=Montag, ...
  // Offset so drehen, dass Montag = 0
  const startOffset = (firstDay + 6) % 7;

  const today = new Date();

  const days: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <span className="calendar-title">
          {currentDate.toLocaleDateString("de-DE", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <div className="nav">
          <button
            className="nav-btn"
            onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
          >
            {"<"}
          </button>
          <button
            className="nav-btn"
            onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="calendar-grid">
        {weekdays.map((w) => (
          <div key={w} className="weekday">
            {w}
          </div>
        ))}

        {days.map((d, i) => {
          if (d === null) return <div key={i} className="day empty"></div>;

          const isSelected =
            d === value.getDate() &&
            month === value.getMonth() &&
            year === value.getFullYear();

          const isToday =
            d === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={i}
              className={`day ${isSelected ? "selected" : ""} ${
                isToday ? "today" : ""
              }`}
              onClick={() => onChange(new Date(year, month, d))}
            >
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
};
