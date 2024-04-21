import { Button } from "../button/button.js";
import styles from "./styles.module.css";

const GreetingBanner: React.FC = () => {
	return (
		<div className={styles["container"]}>
			<section className={styles["introduce"]}>
				<h2 className={styles["title"]}>The chemical negatively charged</h2>
				<p className={styles["text"]}>
					Numerous calculations predict, and experiments confirm, that the force
					field reflects the beam, while the mass defect is not formed. The
					chemical compound is negatively charged. Twhile the mass defect is
				</p>
				<Button
					className={styles["icon"]}
					label="Get started"
					size="default"
					style="secondary"
				/>
			</section>
		</div>
	);
};

export { GreetingBanner };
