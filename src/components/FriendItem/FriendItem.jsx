export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className="friendItem">
      <img src={avatar} alt={name} width="60" />
      <p>{name}</p>
      <span style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </li>
  );
};
