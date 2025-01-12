import React from "react";

const BalanceBox = ({
  accounts = [],
  numOfBanks,
  currentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      {/*this is the div for the chart */}
      <div className="total-balance-chart">{/*render a Doughnut chart*/}</div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Number of bank accounts connected: {numOfBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Current Balance</p>
          <p className="total-balance-amount flex-center gap-2">
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default BalanceBox;
