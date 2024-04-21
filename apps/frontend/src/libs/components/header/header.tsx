import { type DataStatus } from "~/libs/enums/enums.js";
import { useAppDispatch, useCallback, useState } from "~/libs/hooks/hooks.js";
import { type ValueOf } from "~/libs/types/types.js";
import {
	type UserAuthResponseDto,
	actions as authActions,
} from "~/modules/auth/auth.js";

import { Button } from "../button/button.js";
import { Loader } from "../components.js";
import { Link } from "../link/link.js";
import styles from "./styles.module.css";

type Properties = {
	status: ValueOf<typeof DataStatus>;
	user: UserAuthResponseDto | null;
};

const Header: React.FC<Properties> = ({ status, user }: Properties) => {
	const dispatch = useAppDispatch();
	const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

	const handleLogOut = useCallback(() => {
		void dispatch(authActions.logOut()).unwrap();
	}, [dispatch]);

	const toggleBurger = useCallback(() => {
		setIsBurgerOpen(!isBurgerOpen);
	}, [isBurgerOpen]);

	const handleLinkClick = useCallback(() => {
		setIsBurgerOpen(false);
	}, []);

	return (
		<header className={styles["header-container"]}>
			<label className={styles["burger-controller"]}>
				<input
					checked={isBurgerOpen}
					className={styles["burger-cheakbox"]}
					onChange={toggleBurger}
					type="checkbox"
				/>
				<span className={styles["menu"]}>
					<span className={styles["hamburger"]} />{" "}
				</span>
				<nav className={styles["burger-nav"]}>
					<ul className={styles["burger-list"]}>
						{status === "pending" ? (
							<Loader color="main" size="large" />
						) : user ? (
							<Button
								className={styles["log-out-btn"]}
								iconName="logOut"
								label="Log Out"
								onClick={handleLogOut}
								size="default"
								style="primary"
							/>
						) : (
							<>
								<Link
									activeClassName={styles["active"]}
									className={styles["burger-link"]}
									key="Log in"
									onClick={handleLinkClick}
									to="/sign-in"
								>
									<span className={styles["link-title"]}>Log In</span>
								</Link>
								<Link
									activeClassName={styles["active"]}
									className={styles["burger-link"]}
									key="Sing Up"
									onClick={handleLinkClick}
									to="/sign-up"
								>
									<span className={styles["link-title"]}>Sing Up</span>
								</Link>
							</>
						)}
					</ul>
				</nav>
			</label>
		</header>
	);
};

export { Header };
