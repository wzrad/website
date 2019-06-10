import { useState, useEffect } from "react"

// -- constants --
const kTrue = "true"

// -- impls --
export function useSessionFlag(name: string): boolean | null {
  const [flag, setFlag] = useState<boolean | null>(null)

  useEffect(() => {
    const key = `@@ty/${name}`
    const value = window.sessionStorage.getItem(key)
    setFlag(value === kTrue)
    window.sessionStorage.setItem(key, kTrue)
  }, [])

  return flag
}
