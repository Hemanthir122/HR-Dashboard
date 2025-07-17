export const fetchUsers = async (limit = 20) => {
  try {
    const response = await fetch(`https://dummyjson.com/users?limit=${limit}`);
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
