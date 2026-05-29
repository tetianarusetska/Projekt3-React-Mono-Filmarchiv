import { useAuth } from "../providers/AuthContext.jsx"

import SignIn from "../components/SignIn.jsx"
import SignUp from "../components/SignUp.jsx"
import Header from "../components/Header.jsx"

export default function Auth() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="h-screen w-screen flex flex-col">
        <Header />
        <div className="flex flex-col justify-center items-center gap-15 mt-30">
          <SignIn />
          <SignUp />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen">
      <Header />
      <h1 className="text-(--mainColor)">
        Willkommen, {user.email}
      </h1>
    </div>
  );
}