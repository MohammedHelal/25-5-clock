export default function Reset({ handleReset }) {
  return (
    <div className="p-2">
      <button
        id="reset"
        className="btn btn-danger w-50"
        value="reset"
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}
