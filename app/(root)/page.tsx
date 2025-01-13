import React from "react";
import HeaderBox from "@/components/HeaderBox";
import BalanceBox from "@/components/BalanceBox";
import RightSidebar from "@/components/RightSidebar";
const Home = () => {
  const loggedIn = {
    firstName: "Aditya",
    lastName: "Mathur",
    email: "adityam.jobs@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <BalanceBox accounts={[]} numOfBanks={3} currentBalance={2257.49} />
        </header>
        recent transactions
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 2267.49 }]}
      />
    </section>
  );
};

export default Home;
