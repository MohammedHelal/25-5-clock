export default function NavLinks({ breakTime, ses, br }) {
  return (
    <div className="row">
      <div className="col ps-3">
        <button
          className={`${
            !breakTime
              ? "bg-secondary border border-secondary"
              : "bg-dark border border-dark text-light"
          } w-50 fw-semibold rounded-top`}
          value="session"
          type="button"
          onClick={() => breakTime && ses()}
        >
          Session
        </button>
      </div>
      <div className="col pe-3">
        <button
          className={`${
            breakTime
              ? "bg-secondary border border-secondary"
              : "bg-dark border border-dark text-light"
          } w-50 fw-semibold rounded-top`}
          value="break"
          type="button"
          onClick={() => !breakTime && br()}
        >
          Break
        </button>
      </div>
    </div>
  );
}
