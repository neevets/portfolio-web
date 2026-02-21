import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ResolvedTheme = "light" | "dark"

type ThemeProviderState = {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "light",
  resolvedTheme: "light",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "portfolio-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light")

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme: ResolvedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"

      setResolvedTheme(systemTheme)
      root.classList.add(systemTheme)
      return
    }

    setResolvedTheme(theme)
    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    resolvedTheme,
    setTheme: (nextTheme: Theme) => {
      localStorage.setItem(storageKey, nextTheme)
      setTheme(nextTheme)
    },
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const onThemeChange = () => {
      if (theme !== "system") return

      const nextResolvedTheme: ResolvedTheme = mediaQuery.matches ? "dark" : "light"
      setResolvedTheme(nextResolvedTheme)

      const root = window.document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(nextResolvedTheme)
    }

    mediaQuery.addEventListener("change", onThemeChange)
    return () => mediaQuery.removeEventListener("change", onThemeChange)
  }, [theme])

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
