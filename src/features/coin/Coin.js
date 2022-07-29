import { useSelector } from "react-redux"
function Coin() {
 const coin = useSelector((state) => state.counter.count)
 const themecolor = useSelector((state) => state.theme.color)
 return (
  <div>
   <span className="value" style={{ color : themecolor}}>Coin: {coin}</span>
  </div>
 )
}

export default Coin