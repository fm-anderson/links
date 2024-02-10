import { useState } from "react";
import { SigninForm } from "@/components/SigninForm";
import { SignupForm } from "@/components/SignupForm";

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-full justify-center bg-primary-foreground">
      <section className="my-auto flex justify-center md:w-1/2">
        {isLogin ? (
          <SigninForm setIsLogin={setIsLogin} />
        ) : (
          <SignupForm setIsLogin={setIsLogin} />
        )}
      </section>
    </div>
  );
}

export default Authentication;
