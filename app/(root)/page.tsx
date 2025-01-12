import React from "react";
import HeaderBox from "@/components/HeaderBox";
import BalanceBox from "@/components/BalanceBox";
const Home = () => {
  const loggedIn = {
    firstName: "",
  };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
        />
        <BalanceBox accounts={[]} numOfBanks={1} currentBalance={1250.35} />
      </div>
    </section>
  );
};

export default Home;
