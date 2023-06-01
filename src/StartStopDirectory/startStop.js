export default function StartStop({ active, setActive }) {
  return (
    <div className="p-2">
      <button
        id="start_stop"
        className={`btn btn-${!active ? "primary" : "warning"} w-50`}
        value="start"
        type="button"
        onClick={() => setActive(!active)}
      >
        {!active ? "Start" : "Pause"}
      </button>
    </div>
  );
}
