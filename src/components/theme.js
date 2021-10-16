import { createTheme } from "@mui/material"
import { indigo, pink } from "@mui/material/colors"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: indigo,
    secondary: pink,
  },
  typography: {
    fontFamily: ['"Roboto Slab"'],
  },
})

export default theme
