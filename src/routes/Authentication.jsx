import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { SignupForm } from "@/components/SignupForm";
import { Link } from "lucide-react";

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-full flex-col-reverse md:flex-row">
      <section className="hidden w-1/2 flex-col justify-between bg-primary p-10 text-primary-foreground md:flex">
        <div className="flex items-center gap-2">
          <Link size={19} />
          <h1 className="text-xl tracking-wide">NLinks</h1>
        </div>
        <div className="text-primary-foreground">
          <h1 className="tracking-wide">The Only Link Organizer You Need</h1>
        </div>
      </section>
      <section className="my-auto flex justify-center md:w-1/2">
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <SignupForm setIsLogin={setIsLogin} />
        )}
      </section>
    </div>
  );
}

export default Authentication;
