const ExceptionMessage = {
	EMAIL_ALREADY_EXISTS: "Email is already taken.",
	FILE_IS_TOO_LARGE: "File is too large.",
	INVALID_CREDENTIALS: "Invalid credentials.",
	SOMETHING_WENT_WRONG: "Something went wrong...",
	TOKEN_EXPIRED: "Token expired.",
	UNAUTHORIZED: "Unauthorized.",
	UNKNOWN_ERROR: "Unknown error occurred.",
	USER_NOT_FOUND: "User not found.",
} as const;

export { ExceptionMessage };
