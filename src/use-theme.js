import { useState } from "react"
import { DARK_COLOR, LIGHT_COLOR } from "./color";

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleIsDark = () => setIsDark(!isDark);

  return {
    isDark,
    NEWCOLOR: isDark ? DARK_COLOR : LIGHT_COLOR,
    toggleIsDark,
  }
}