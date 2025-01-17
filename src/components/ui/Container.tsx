import { ReactNode } from "react"



type TContainerProps= {
    children : ReactNode
}
const Container = ({children}:TContainerProps) => {
  return (
    <div className="h-screen w-full max-w-7xl mx-auto bg-orange-400">{children}</div>
  )
}

export default Container