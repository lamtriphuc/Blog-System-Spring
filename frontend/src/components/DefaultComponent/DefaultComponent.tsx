import type { ReactNode } from "react"
import HeaderComponent from "../HeaderComponent/HeaderComponent"

const DefaultComponent: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div>
        <HeaderComponent/>
        {children}
    </div>
  )
}

export default DefaultComponent