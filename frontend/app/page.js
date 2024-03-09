"use client";
import {Button} from '@nextui-org/button';
import {useTheme} from "next-themes";
  

export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <main className="">
       <Button onClick={() => setTheme('light')}>Click me</Button>
    </main>
  )
}
