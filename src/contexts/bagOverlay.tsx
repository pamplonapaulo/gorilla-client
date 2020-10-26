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

type BagOverlayContextType = {
  bagOverlay: boolean
  setBagOverlay: (value: boolean) => void
}

const [useBagOverlay, CtxProvider] = createCtx<BagOverlayContextType>()

type Props = {
  children: React.ReactNode
}

const BagOverlayProvider = ({ children }: Props) => {
  const [bagOverlay, setBagOverlay] = React.useState(false)

  return (
    <CtxProvider value={{ bagOverlay, setBagOverlay }}>{children}</CtxProvider>
  )
}

export { BagOverlayProvider, useBagOverlay }
