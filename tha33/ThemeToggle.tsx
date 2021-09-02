import {useContext} from "react"
import ThemeContext from './themecontext'
const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <button onClick={()=>{
            setTheme(!theme)
        }}>
      {theme ? "Dark" : "Light"}
        </button>
    )
}
export default ThemeToggle;