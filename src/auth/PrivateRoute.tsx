import * as React from "react"
import { Route } from "react-router-dom"
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"
import VerifyView from "../views/Verify/index.view"
import ErrorView from "../views/Error/index.view"

interface PrivateRouteProps {
  component: React.ComponentType<any>
  path: string
  role: string
  exact?: boolean
  sensitive?: boolean
  strict?: boolean
}

/**
 * Represents a protected route that can only be accessed when the user is
 * authenticated. Users will be redirected to the Auth0 login page if they
 * attempt to access protected routes.
 *
 * role prop: include the names of which role is able to access this route
 */

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  path,
  role,
}: PrivateRouteProps) => {
  const { user } = useAuth0()

  let route: React.ComponentType<any> = component

  // redirect if email is not verified
  if (!user?.email_verified) {
    route = VerifyView
  }

  // if admin route, redirect if not admin
  const userRoles = (user && user[`https://cruzhacks.com/roles`]) || []
  if (userRoles.indexOf(role) === -1) {
    route = ErrorView
  }

  return (
    <Route
      element={
        <>
          {withAuthenticationRequired(route, {
            returnTo: path,
            onRedirecting: () => <div>Redirecting...</div>,
          })}
        </>
      }
      path={path}
    />
  )
}

PrivateRoute.defaultProps = {
  role: undefined,
  strict: false,
}

export default PrivateRoute
