const deleteUser = (user) => {
  return fetch(`http://localhost:3000/users/${user.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};
const updateUser = (user) => {
  return fetch(`http://localhost:3000/users/${user.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};
const addUser = (user) => {
  return fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};
export { addUser, updateUser, deleteUser };
