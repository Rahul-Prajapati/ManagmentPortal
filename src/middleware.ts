import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";
import { routeAccessMap } from './lib/settings';


// ✅ Public routes (no auth required)
const publicRoutes = ["/"];

// ✅ Role → Dashboard mapping
const roleHomeMap: Record<string, string> = {
  admin: "/dashboard/admin",
  teacher: "/dashboard/teacher",
  student: "/dashboard/student",
  parent: "/dashboard/parent",
};

const matchers = Object.keys(routeAccessMap).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccessMap[route],
}));



console.log("matchers:::: ",matchers);

export default clerkMiddleware( async(auth, req) => {
  // if (isProtectedRoute(req)) auth().protect()

  const { userId ,sessionClaims } = await auth();

  const pathname = req.nextUrl.pathname;

  // console.log(sessionClaims);

  const role = (sessionClaims?.metadata as { role?: string })?.role;

  // console.log("middleware role:--",role);

  // console.log("middleware metadata:--",sessionClaims?.metadata);

  // if (!role) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }

//   for (const { matcher, allowedRoles } of matchers) {
//     if (matcher(req) && !allowedRoles.includes(role!)) {
//       return NextResponse.redirect(new URL(`/dashboard/${role}`, req.url));
//     }
//   }  1

if (publicRoutes.includes(pathname)) {
  return NextResponse.next();
}

// ✅ 2. Not logged in → go to login page
if (!userId) {
  return NextResponse.redirect(new URL("/", req.url));
}

// ✅ 3. Logged in but no role → fallback to login
if (!role) {
  return NextResponse.redirect(new URL("/", req.url));
}

// ✅ 4. Role-based route protection
for (const { matcher, allowedRoles } of matchers) {
  if (matcher(req)) {
    if (!allowedRoles.includes(role)) {
      const targetPath = roleHomeMap[role];

      // ✅ avoid redirect loop
      if (!pathname.startsWith(targetPath)) {
        return NextResponse.redirect(new URL(targetPath, req.url));
      }
    }
    break; // stop after first match
  }
}

return NextResponse.next();
});   



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}