"use client";
import {Button} from '@nextui-org/button';
import {useTheme} from "next-themes";
import { UserAuth } from "../app/context/AuthContext.js";
  

export default function Home() {
  const { theme, setTheme } = useTheme();
  const { user,logOut } = UserAuth();
  return (
    <main className="">
       <Button onClick={() => setTheme('light')}>Click me</Button>
       <Button onClick={logOut}>Log Out</Button>
    </main>
  )
}
