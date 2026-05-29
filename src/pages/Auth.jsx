import { useAuth } from "../providers/AuthContext.jsx"

import Login from "../components/Login.jsx"

export default function Auth() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return <h1 className="text-(--mainColor)">Willkommen, {user.email}</h1>;
}