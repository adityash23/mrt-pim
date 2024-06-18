import { NextApiRequest, NextApiResponse } from 'next';

// Defining Role type 
type Role = string; // admin/user

/**
 * Asserts that the expected role matches the actual role
 * Throws an error if roles don't match
 * @param expected The expected role for the action
 * @param actual The actual role of the user
 * @throws Error if roles don't match
 */
export function requireRole(expected: Role, actual: Role): boolean {
    if (expected !== actual) {
        throw new Error(`Insufficient permissions. Required role: ${expected}`);
    }
    return true;
}

/**
 * Wrapper around requireRole to redirect users on role mismatch
 * @param expected The expected user role for a given action
 * @param actual The actual user role 
 */
export function requireRoleRedirect(expected: Role, actual: Role): void {
    const redirectTo = '/login'; // login path
    if (!requireRole(expected, actual)) {
        // redirect from Next.js 
        redirect(redirectTo);
  }
}

/**
 * Convenience function that enforces admin role and redirects on mismatch
 * @param role The actual role of the user
 */
export function requireAdminRole(role: Role): void {
    requireRoleRedirect('admin', role);
}

// Helper function to redirect
function redirect(url: string): void {
    redirect(url);
}
