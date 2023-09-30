export function FirebaseError(errorResponse) {
    switch (errorResponse.code) {
        case 'auth/user-not-found':
            return 'This email is not registered. Please proceed to register an account.';
        case 'auth/wrong-password':
            return 'Incorrect password entered. Please try again.';
        case 'auth/too-many-request': // when user keeps clicking on the login/register buttons, can get disabled.
            return 'Authentication failed multiple times and account is disabled. Please proceed to register a new account.';
        case 'auth/email-already-in-use':
            return 'This email is already registered. You can proceed to login or register using another account.'
        case 'auth/invalid-email':
            return '';
        default:
            return '';
    }
}