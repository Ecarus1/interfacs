function UserLayout({user}) {
  return (
    <div className="flex flex-col items-center mb-5">
      <img src={user.avatar_url} alt="" className="rounded-full max-h-52 max-w-fit"/>
      <div>
        <p>Логин: {user.login}</p>
        <p>Имя: {user.name}</p>
      </div>
    </div>
  );
}

export default UserLayout;