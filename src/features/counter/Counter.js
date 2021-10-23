import './Counter.scss'

export function Counter() {
  return (
    <div className="counter">
      <div className="row-elements">
        <button
          className="incrementBtn">
          +
        </button>
        <span>10</span>
        <button
          className="decrementBtn">
          -
        </button>
      </div>
      <div className="row-elements" style={{marginTop:20}}>
        <input type="text" name="inputIncrement" id="InputChange" />
        <button className="addBtn"
        >
          Add Amount
        </button>
        <button className="subtractBtn"
        >
          Subtract Amount
        </button>
      </div>
    </div>
  )
}

