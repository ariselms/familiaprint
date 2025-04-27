export default function UserProfileForm({user}:{user:any}) {

  return (
    <div>
      <p>{user?.email}</p>
    </div>
  );
}