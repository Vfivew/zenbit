import { Icon } from "../icon/icon.js";
import { Link } from "../link/link.js";
import styles from "./styles.module.css";

const Footer: React.FC = () => {
	return (
		<footer className={styles["footer-container"]}>
			<div className={styles["footer-wrapper"]}>
				<aside className={styles["footer-column"]}>
					<section>
						<h3 className={styles["column-title"]}>
							<span className={styles["title-text"]}>About</span> us
						</h3>
						<p className={styles["selected-text"]}>
							We are available everywhere. You can take a car to return it in
							almost every corner of our city.
						</p>
					</section>
				</aside>
				<aside className={styles["footer-column"]}>
					<section>
						<h3 className={styles["column-title"]}>Contact info</h3>
						<ul>
							<li>
								<span className={styles["selected-text"]}>Office:</span>
								<a href="tel:+380999999999"> +380 (99) 99 99 999</a>
							</li>
							<li>
								<span className={styles["selected-text"]}>
									Contact serivce:
								</span>
								<a href="tel:+380999999999"> +380 (99) 99 99 999</a>
							</li>
							<li>
								<span className={styles["selected-text"]}>Email:</span>{" "}
								service@gmail.com
							</li>
						</ul>
					</section>
				</aside>
				<aside className={styles["footer-column"]}>
					<section>
						<h3 className={styles["column-title"]}>Service Hours</h3>
						<ul>
							<li>
								<span className={styles["selected-text"]}>
									Monday - Friday:
								</span>{" "}
								09:00AM - 09:00PM
							</li>
							<li>
								<span className={styles["selected-text"]}>Saturday:</span>{" "}
								09:00AM - 07:00PM
							</li>
							<li>
								<span className={styles["selected-text"]}>Sunday:</span> Closed
							</li>
						</ul>
					</section>
				</aside>
				<aside className={styles["footer-column"]}>
					<section>
						<h3 className={styles["column-title"]}>Social Networks</h3>
						<ul className={styles["social-networks"]}>
							<li>
								<Link to="/">
									<Icon className={styles["premium-icon"]} name="twitter" />
								</Link>
							</li>
							<li>
								<Link to="/">
									<Icon className={styles["premium-icon"]} name="facebook" />
								</Link>
							</li>
							<li>
								<Link to="/">
									<Icon className={styles["premium-icon"]} name="linkedin" />
								</Link>
							</li>
						</ul>
					</section>
				</aside>
			</div>
			<div className={styles["footer-copyright"]}>
				<p className={styles["copyright-content"]}>
					Copyright © 2024.{" "}
					<span className={styles["selected-text"]}>By me </span> - free
					template
				</p>
			</div>
		</footer>
	);
};

export { Footer };
