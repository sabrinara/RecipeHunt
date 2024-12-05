"use client";

import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginBtn = () => {
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect");
  return (
    <Button
      onClick={() => {
        signIn("google", { callbackUrl: redirect ? redirect : "/" });
      }}
      className="bg-transparent border-2 border-red-500 hover:bg-white rounded-none mt-4 font-semibold" 
    >
      <FcGoogle className="text-3xl"/>
      Log In With Google
    </Button>
  );
};

export default GoogleLoginBtn;