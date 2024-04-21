import { type ValueOf } from "@website/shared";

import { Loader, Navigate } from "~/libs/components/components.js";
import { AppRoute, DataStatus } from "~/libs/enums/enums.js";
import { useAppSelector } from "~/libs/hooks/hooks.js";
import { type UserAuthResponseDto } from "~/modules/users/users.js";

import { AuthWrapper } from "../auth-wrapper/auth-wrapper.js";

type Properties = {
	component: React.ReactNode;
	redirectTo?: ValueOf<typeof AppRoute>;
};

const ProtectedRoute: React.FC<Properties> = ({
	component,
	redirectTo = AppRoute.SIGN_IN,
}: Properties) => {
	const { authDataStatus, user } = useAppSelector(({ auth }) => {
		return {
			authDataStatus: auth.dataStatus,
			user: auth.user,
		};
	});

	const hasUser = Boolean(user);

	if (
		authDataStatus === DataStatus.PENDING ||
		authDataStatus === DataStatus.IDLE
	) {
		return <Loader color="main" size="large" />;
	}

	if (!hasUser) {
		return <Navigate replace to={redirectTo} />;
	}

	return (
		<AuthWrapper user={user as UserAuthResponseDto}>{component}</AuthWrapper>
	);
};

export { ProtectedRoute };
