export default function IncrementDecrement({
  handleClick,
  sesLength,
  brLength
}) {
  return (
    <>
      <div className="d-flex justify-content-between w-75 mx-auto text-light text-center">
        <div className="fs-3 fw-semibold">
          <button
            id="session-decrement"
            className="btn text-light"
            value="ses-decr"
            onClick={(e) => handleClick(e)}
          >
            <i id="sesD" className="fa fa-arrow-down "></i>
          </button>
          <span id="session-length">{sesLength}</span>
          <button
            id="session-increment"
            className="btn text-light"
            value="ses-incr"
            onClick={(e) => handleClick(e)}
          >
            <i id="sesI" className="fa fa-arrow-up"></i>
          </button>
        </div>
        <div className="fs-3 fw-semibold">
          <button
            id="break-decrement"
            className="btn text-light"
            value="br-decr"
            onClick={(e) => handleClick(e)}
          >
            <i id="brD" className="fa fa-arrow-down"></i>
          </button>
          <span id="break-length">{brLength}</span>
          <button
            id="break-increment"
            className="btn text-light"
            value="br-incr"
            onClick={(e) => handleClick(e)}
          >
            <i id="brI" className="fa fa-arrow-up"></i>
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between w-75 mx-auto text-light text-center">
        <div id="break-label" className="fs-5 fw-semibold">
          Session Length
        </div>
        <div id="session-label" className="fs-5 fw-semibold">
          Break Length
        </div>
      </div>
    </>
  );
}
