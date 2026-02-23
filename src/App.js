import { useState, useEffect } from "react";

export default function App() {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("jp-rpg");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("jp-rpg", JSON.stringify(entries));
  }, [entries]);

  const totalXP = calculateXP(entries);
  const level = Math.floor(Math.sqrt(totalXP / 10)) + 1;
  const nextLevelXP = Math.pow(level, 2) * 10;
  const currentLevelXP = Math.pow(level - 1, 2) * 10;
  const progress =
    ((totalXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

  const streak = calculateStreak(entries);

  const addEntry = () => {
    if (!text.trim()) return;

    const today = new Date().toISOString().split("T")[0];

    if (entries.some((e) => e.date === today)) return;

    const newEntry = {
      id: Date.now(),
      text,
      date: today,
    };

    setEntries([newEntry, ...entries]);
    setText("");
  };

  return (
    <div style={styles.container}>
      <h1>🗾 Japanese RPG Tracker</h1>

      <div style={styles.card}>
        <h2>🎮 Nivel {level}</h2>
        <div style={styles.barBackground}>
          <div
            style={{
              ...styles.barFill,
              width: `${progress}%`,
            }}
          />
        </div>
        <p>{totalXP} XP</p>
        <p>🔥 Racha: {streak} días</p>
      </div>

      <div style={styles.card}>
        <textarea
          placeholder="¿Qué entendiste hoy?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.textarea}
        />
        <button onClick={addEntry} style={styles.button}>
          + Ganar XP
        </button>
      </div>

      <div>
        <h2>📜 Historial</h2>
        {entries.map((e) => (
          <div key={e.id} style={styles.entry}>
            <p>{e.text}</p>
            <small>{e.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function calculateXP(entries) {
  let xp = 0;

  for (let i = 0; i < entries.length; i++) {
    xp += 10;

    if (i < entries.length - 1) {
      const today = new Date(entries[i].date);
      const yesterday = new Date(entries[i + 1].date);
      const diff = (today - yesterday) / (1000 * 60 * 60 * 24);

      if (diff === 1) xp += 5;
    }
  }

  return xp;
}

function calculateStreak(entries) {
  if (entries.length === 0) return 0;

  let streak = 1;

  for (let i = 0; i < entries.length - 1; i++) {
    const current = new Date(entries[i].date);
    const next = new Date(entries[i + 1].date);
    const diff = (current - next) / (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    fontFamily: "system-ui",
  },
  card: {
    background: "#111",
    color: "white",
    padding: "15px",
    borderRadius: "15px",
    marginBottom: "20px",
  },
  barBackground: {
    height: "15px",
    background: "#333",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "10px",
  },
  barFill: {
    height: "100%",
    background: "limegreen",
    transition: "0.3s",
  },
  textarea: {
    width: "100%",
    height: "80px",
    marginBottom: "10px",
    borderRadius: "10px",
    padding: "8px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
  entry: {
    border: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
  },
};