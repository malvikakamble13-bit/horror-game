import { useState } from "react";

const stories = {
  start: {
    text: "🌑 You wake up in a dark abandoned house. The door behind you is locked. You hear a strange noise from upstairs...",
    choices: [
      { label: "🔦 Go upstairs", next: "upstairs" },
      { label: "🚪 Try to break the door", next: "door" },
    ],
  },
  upstairs: {
    text: "👣 You slowly walk upstairs. Each step creaks loudly. At the top you see two doors — one has light under it, one is scratched from inside...",
    choices: [
      { label: "💡 Open the lit door", next: "litdoor" },
      { label: "🩸 Open the scratched door", next: "scratcheddoor" },
    ],
  },
  door: {
    text: "💪 You ram into the door. It doesn't budge. Suddenly the lights go out completely. You hear breathing right behind you...",
    choices: [
      { label: "😱 Turn around slowly", next: "turnaround" },
      { label: "🏃 Run upstairs", next: "upstairs" },
    ],
  },
  litdoor: {
    text: "🕯️ You open the door. A candle flickers on a table. There's a note that reads: 'GET OUT BEFORE MIDNIGHT'. Your phone says 11:58 PM...",
    choices: [
      { label: "🪟 Jump out the window", next: "escape" },
      { label: "📜 Read more of the note", next: "note" },
    ],
  },
  scratcheddoor: {
    text: "😨 You open the scratched door. The room is empty... except for a mirror showing someone standing BEHIND you.",
    choices: [
      { label: "🔄 Turn around", next: "monster" },
      { label: "🏃 Run without looking", next: "escape" },
    ],
  },
  turnaround: {
    text: "😰 You slowly turn around. Nothing is there. But on the wall, written in red: 'I AM IN YOUR HEAD'...",
    choices: [
      { label: "🧠 Ignore it and explore", next: "upstairs" },
      { label: "😭 Panic and hide", next: "gameover" },
    ],
  },
  note: {
    text: "📜 The note continues: 'The monster feeds on fear. Stay calm and it cannot see you.' Your heart is pounding...",
    choices: [
      { label: "😌 Try to stay calm", next: "escape" },
      { label: "😱 You can't help it — you panic", next: "gameover" },
    ],
  },
  monster: {
    text: "👹 You turn around. A tall shadowy figure stands there. It opens its mouth and whispers your name...",
    choices: [
      { label: "😱 Scream", next: "gameover" },
      { label: "🤫 Stay silent", next: "escape" },
    ],
  },
  escape: {
    text: "🌅 You make it out! You run into the cold night air. The house goes dark behind you. You survived... but you'll never forget what you saw. THE END.",
    choices: [],
    end: true,
    win: true,
  },
  gameover: {
    text: "💀 The darkness swallows you whole. Nobody ever found you. The house claims another soul... GAME OVER.",
    choices: [],
    end: true,
    win: false,
  },
};

export default function App() {
  const [scene, setScene] = useState("start");
  const current = stories[scene];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Georgia, serif",
      padding: "20px"
    }}>
      <div style={{
        maxWidth: "600px",
        width: "100%",
        background: "#111",
        border: "1px solid #333",
        borderRadius: "12px",
        padding: "40px",
        boxShadow: "0 0 40px rgba(255,0,0,0.1)"
      }}>
        <h1 style={{
          color: "#cc0000",
          textAlign: "center",
          fontSize: "28px",
          marginBottom: "30px",
          letterSpacing: "2px"
        }}>
          👻 THE DARK HOUSE
        </h1>
        <p style={{
          color: "#e0e0e0",
          fontSize: "17px",
          lineHeight: "1.8",
          marginBottom: "32px",
          minHeight: "100px"
        }}>
          {current.text}
        </p>
        {!current.end && (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {current.choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => setScene(choice.next)}
                style={{
                  background: "#1a1a1a",
                  color: "#e0e0e0",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  padding: "14px 20px",
                  fontSize: "15px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s"
                }}
                onMouseOver={e => e.target.style.borderColor = "#cc0000"}
                onMouseOut={e => e.target.style.borderColor = "#444"}
              >
                {choice.label}
              </button>
            ))}
          </div>
        )}
        {current.end && (
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "32px", marginBottom: "20px" }}>
              {current.win ? "🎉" : "💀"}
            </p>
            <button
              onClick={() => setScene("start")}
              style={{
                background: "#cc0000",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "14px 28px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              🔄 Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
