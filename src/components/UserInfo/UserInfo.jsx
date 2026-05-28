export const UserInfo = ({ user }) => (
  <div className="UserInfo">
    <strong className="UserInfo__name">{user.name}</strong>

    <a className="UserInfo__email" href={`mailto:${user.email}`}>
      {user.email}
    </a>
  </div>
);
