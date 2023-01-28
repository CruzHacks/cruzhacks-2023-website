import * as React from "react"
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react"
import BGwrapper from "../components/BGwrapper"
import ErrorView from "../views/Error/index.view"
import Loading from "../components/Loading"
// import VerifyView from "../views/Verify/index.view"

interface PrivateRouteProps {
  component: React.ReactElement
  role?: string
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
  role,
}: PrivateRouteProps) => {
  const { user } = useAuth0()
  console.log("🚀 ~ file: PrivateRoute.tsx:29 ~ user", user)

  let route: React.ReactElement = component
  // redirect if email is not verified
  /**if (!user?.email_verified) {
    route = VerifyView
  }**/

  // if admin route, redirect if not admin
  if (role) {
    const userRoles = (user && user[`https://cruzhacks.com/roles`]) || []
    if (userRoles.indexOf(role) === -1) {
      route = BGwrapper(ErrorView)
    }
  }

  return route
}

PrivateRoute.defaultProps = {
  role: undefined,
  strict: false,
}

export default withAuthenticationRequired(PrivateRoute, {
  onRedirecting: () => <Loading message='Redirecting...' />,
})
