import React from "react";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from "../sourceJSON/user.json";
import statisticalData from "../sourceJSON/statisticalData.json";
import friends from "../sourceJSON/friends.json";
import transactions from "../sourceJSON/transactions.json";

export default function App() {
  return (
    <>
      <Profile props={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
