import {
	CardList,
	GreetingBanner,
	Loader,
} from "~/libs/components/components.js";
import {
	useAppDispatch,
	useAppSelector,
	useEffect,
} from "~/libs/hooks/hooks.js";
import { actions as galleryActions } from "~/modules/gallery/gallery.js";

import styles from "./styles.module.css";

const Overview: React.FC = () => {
	const dispatch = useAppDispatch();
	const gallery = useAppSelector((state) => state.gallery.gallery);
	const status = useAppSelector((state) => state.gallery.dataStatus);

	useEffect(() => {
		void dispatch(galleryActions.getGallery());
	}, [dispatch]);

	return (
		<div className={styles["container"]}>
			<GreetingBanner />
			{status === "pending" ? (
				<Loader color="main" size="large" />
			) : (
				<CardList gallery={gallery} />
			)}
		</div>
	);
};

export { Overview };
