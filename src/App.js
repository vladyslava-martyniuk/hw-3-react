import './App.css';
import user from "./data/user.json";
import { Profile } from "./components/Profile/Profile";
import statistics from "./data/statistics.json";
import { Statistics } from "./components/Statistics/Statistics";
import {FriendsList} from "./components/FriendsList/FriendsList";
import transactions from "./data/transactions.json";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";



function App() {
  return (
    <div className="App">
      <h1>Завдання тут</h1>
      <h2>Завдання 1</h2>
      <Profile user={user} />
      <h2>Завдання 2</h2>
      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />
      <h2>Завдання 3</h2>
      <FriendsList />
      <h2>Завдання 4</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
