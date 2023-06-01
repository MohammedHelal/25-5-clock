export default function Timer({ breakTime, mins, sec }) {
  return (
    <div className="bg-secondary w-75 mx-auto my-auto pt-5">
      <h1 id="timer-label">{!breakTime ? "Session" : "Break"}</h1>
      <p
        id="time-left"
        className="fw-semibold text-light mx-auto my-auto"
        style={{ fontSize: "100px" }}
      >
        {mins < 10 && "0"}
        {mins}:{sec < 10 && "0"}
        {sec}
      </p>
      <audio
        id="beep"
        className="clip"
        src="https://cdn.pixabay.com/audio/2022/03/15/audio_17cba0354b.mp3"
      ></audio>
    </div>
  );
}
