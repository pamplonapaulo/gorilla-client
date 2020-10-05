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

type UserContextType = {
  userLog: string
  setUserLog: Dispatch<SetStateAction<string>>
}

const [useUser, CtxProvider] = createCtx<UserContextType>()

type Props = {
  children: React.ReactNode
}

const UserProvider = ({ children }: Props) => {
  const [userLog, setUserLog] = useState('false')

  // React.useEffect(() => {
  //   const currentUser = false
  //   setUserLog(currentUser)
  // }, [])

  return <CtxProvider value={{ userLog, setUserLog }}>{children}</CtxProvider>
}

export { UserProvider, useUser }
