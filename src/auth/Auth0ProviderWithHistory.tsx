// @Authors: William Gao, Krishna Pandian
// edits @Alper deCarion for migrating to react-router v6
import * as React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"

interface Auth0ProviderProps {
  domain: string
  clientId: string
  audience: string
  redirectUri: string
  children: React.ReactNode
}

const Auth0ProviderWithHistory: React.FC<Auth0ProviderProps> = ({
  domain,
  clientId,
  audience,
  redirectUri,
  children,
}: Auth0ProviderProps) => {
  const history = useNavigate()

  const onRedirectCallback = (appState: any) => {
    history(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      audience={audience}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens
      cacheLocation='memory'
    >
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithHistory
