import React, { useState } from "react";
import { Calendar } from "./Calendar";
import { Button } from "./Buttons";
import "./App.css";

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleCancel = () => {
    alert("Aktion abgebrochen");
  };

  const handleNext = () => {
    alert("Weiter mit Datum: " + selectedDate.toDateString());
    // später → Scanner starten
  };

  return (
    <div className="App">
      {/* Gemeinsamer Container für Kalender + Buttons */}
      <div className="calendar-container">
        <Calendar value={selectedDate} onChange={setSelectedDate} />
        <p>Ausgewähltes Datum: {selectedDate.toLocaleDateString("de-DE")}</p>

        <div className="button-row">
          <Button label="Abbrechen" onClick={handleCancel} variant="secondary" />
          <Button label="Weiter" onClick={handleNext} variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default App;
