// desc Auth user/set token
// routes POST /api/users/auth
// access Public

const authUser = async (req, res) => {
  res.status(200).json({ message: "Auth User" });
};

export { authUser };
