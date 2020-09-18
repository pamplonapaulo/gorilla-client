import React from 'react'

export function createCtx<ContextType>() {
  const ctx = React.createContext<ContextType | undefined>(undefined)
  function useCtx() {
    const c = React.useContext(ctx)
    if (!c) throw new Error('useCtx must be inside a Provider with a value')
    return c
  }
  return [useCtx, ctx.Provider] as const
}

type MenuContextType = {
  menu: boolean
  setMenu: (value: boolean) => void
}

const [useMenu, CtxProvider] = createCtx<MenuContextType>()

type Props = {
  children: React.ReactNode
}

const MenuProvider = ({ children }: Props) => {
  const [menu, setMenu] = React.useState(false)

  React.useEffect(() => {
    const currentMenu = false
    setMenu(currentMenu)
  }, [])

  return <CtxProvider value={{ menu, setMenu }}>{children}</CtxProvider>
}

export { MenuProvider, useMenu }
