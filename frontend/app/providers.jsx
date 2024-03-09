'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}) {
  return (
    <NextUIProvider className='h-screen p-4 w-screen'>
      <NextThemesProvider attribute="class">
      {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}