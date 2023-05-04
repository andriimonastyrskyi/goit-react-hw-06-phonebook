export const selectUsers = state => state.users.users;

export const selectFilteredUsers = state => {
  const filterValue = state.filter.toLowerCase();
  const users = getUsers(state);
  return users.filter(el =>
    el.name.toLowerCase().includes(normalizeFilteredUser)
  );
};
