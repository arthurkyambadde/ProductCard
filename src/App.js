import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2 className="CardHeading">EXPLORER</h2>
      <p className="strategyOffer">
        {" "}
        ~ ₹83 for running one strategy for one month
      </p>
      <p className="strategyPrice">₹500</p>
      <p className="strategyCredits">600 credits </p>
      <p className="strategyRate">*100 credits/month/strategy</p>
      <button className="cardButton">Buy</button>
      <div className="offerTag">
        <p className="offerTagName">SAVE</p>
        <p className="offerTagRate">17%</p>
      </div>
      <div className="popularityTag">Most popular!</div>
      <div className="checkedTag">
        <div className="checkedTickBackground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="checkedTick"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <div className="checkedTagBackground">a</div>
    </div>
  );
}
