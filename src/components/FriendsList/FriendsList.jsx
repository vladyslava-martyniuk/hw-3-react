import friends from "../../data/friends.json";
import { FriendItem } from "../FriendItem/FriendItem";

export const FriendsList = () => {
  return (
    <ul className="friendsList">
      {friends.map((friend) => (
        <FriendItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
