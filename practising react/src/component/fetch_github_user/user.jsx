export default function User({ user }) {
  return (
    <div>
      {user === null ? (
        "Input User Name in the search field"
      ) : user.status ? (
        "No user found in this name"
      ) : (
        <>
          <h2>Name: {user.name}</h2>
          <h4>Github ID: {user.login}</h4>
          <div>
            <img width={"30px"} src={user.avatar_url} alt={user.name} />
          </div>
          <div>
            <a href={user.html_url} target="blank">
              Github Account{" "}
            </a>
          </div>
          <div>
            <p>Followers:{user.followers}</p>
          </div>
          <div>
            <p>Following:{user.following}</p>
          </div>
        </>
      )}
    </div>
  );
}
