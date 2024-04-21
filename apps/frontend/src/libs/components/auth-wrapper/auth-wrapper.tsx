import { type UserAuthResponseDto } from "~/modules/auth/auth.js";

import styles from "./styles.module.css";

type Properties = {
	children: React.ReactNode;
	user: UserAuthResponseDto;
};

const AuthWrapper: React.FC<Properties> = ({ children }: Properties) => {
	return <div className={styles["page-layout"]}>{children}</div>;
};

export { AuthWrapper };
