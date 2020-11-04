import React, {
  Dispatch,
  useContext,
  createContext,
  SetStateAction,
  useState
} from 'react'

export function createCtx<ContextType>() {
  const ctx = createContext<ContextType | undefined>(undefined)
  function useCtx() {
    const c = useContext(ctx)
    if (!c) throw new Error('useCtx must be inside a Provider with a value')
    return c
  }
  return [useCtx, ctx.Provider] as const
}

type BagContextType = {
  bag: Bag | []
  setBag: Dispatch<SetStateAction<Bag | []>>
}

type Bag = Item[]

type Item = {
  id: string
  name: string
  imgHash: string
  price: number
  quantityToBuy: number
  quantityToSubscribe: number
}

const [useBag, CtxProvider] = createCtx<BagContextType>()

type Props = {
  children: React.ReactNode
}

const BagProvider = ({ children }: Props) => {
  const [bag, setBag] = useState<Bag | []>([])

  // React.useEffect(() => {
  //   const currentUser = false
  //   setUserLog(currentUser)
  // }, [])

  return <CtxProvider value={{ bag, setBag }}>{children}</CtxProvider>
}

export { BagProvider, useBag }
