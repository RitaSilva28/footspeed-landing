import { useRef, useState } from "react";
import "./DemoTrainer.css";

const DEMO_DURATION = 40;
const CALL_INTERVAL = 5;

const COLORS = [
  { name: "Red", value: "#ff1b1b" },
  { name: "Green", value: "#00ff1a" },
];

export default function DemoTrainer() {
  const [timeLeft, setTimeLeft] = useState(DEMO_DURATION);
  const [nextCallIn, setNextCallIn] = useState(CALL_INTERVAL);
  const [isRunning, setIsRunning] = useState(false);
  const [currentColor, setCurrentColor] = useState<(typeof COLORS)[0] | null>(
    null
  );
  const [calls, setCalls] = useState<string[]>([]);

  const intervalRef = useRef<number | null>(null);
  const timeLeftRef = useRef(DEMO_DURATION);
  const nextCallInRef = useRef(CALL_INTERVAL);

  function speak(text: string) {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  }

  function callRandomColor() {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];

    setCurrentColor(randomColor);
    setCalls((prev) => [...prev, randomColor.name]);
    speak(randomColor.name);
  }

  function clearDemoInterval() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function resetDemo() {
    clearDemoInterval();

    timeLeftRef.current = DEMO_DURATION;
    nextCallInRef.current = CALL_INTERVAL;

    setTimeLeft(DEMO_DURATION);
    setNextCallIn(CALL_INTERVAL);
    setIsRunning(false);
    setCurrentColor(null);
    setCalls([]);

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  function startDemo() {
    resetDemo();
    setIsRunning(true);
    callRandomColor();

    intervalRef.current = window.setInterval(() => {
      timeLeftRef.current -= 1;
      nextCallInRef.current -= 1;

      setTimeLeft(timeLeftRef.current);
      setNextCallIn(nextCallInRef.current);

      if (timeLeftRef.current <= 0) {
        resetDemo();
        return;
      }

      if (nextCallInRef.current <= 0) {
        callRandomColor();
        nextCallInRef.current = CALL_INTERVAL;
        setNextCallIn(CALL_INTERVAL);
      }
    }, 1000);
  }

  function stopDemo() {
    resetDemo();
  }

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="demoExercise">
      <div className="demoTimerBlock">
        <p className="demoTimer">
          {minutes}:{seconds}
        </p>

        <p className="demoCones">Cones called: {calls.length}</p>
      </div>

      {isRunning && currentColor ? (
        <>
          <div
            className="demoCurrentColor"
            style={{ backgroundColor: currentColor.value }}
          >
            <span>{currentColor.name}</span>
          </div>

          <p className="demoNextCall">Next call in: {nextCallIn}s</p>

          <button className="demoBackBtn" onClick={stopDemo}>
            Back
          </button>
        </>
      ) : (
        <button className="startBtn demoStartBtn" onClick={startDemo}>
          Start Demo
        </button>
      )}

      <div className="demoHistoryCard">
        <p className="historyTitle">Colors called</p>

        <div className="demoColorHistoryList">
          {calls.length === 0 ? (
            <span className="emptyHistory">Start the demo to test it</span>
          ) : (
            calls.map((call, index) => {
              const color = COLORS.find((c) => c.name === call);

              return (
                <span className="demoHistoryChip" key={`${call}-${index}`}>
                  <span
                    className="demoHistoryDot"
                    style={{ backgroundColor: color?.value }}
                  />
                  {call}
                </span>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}