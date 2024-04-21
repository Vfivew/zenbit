import { type GalleryResponseDto } from "~/modules/gallery/gallery.js";

import styles from "./styles.module.css";

type Properties = {
	gallery: GalleryResponseDto[];
};

const CardList: React.FC<Properties> = ({ gallery }: Properties) => {
	return (
		<div className={styles["list-wrapper"]}>
			<h2 className={styles["list-title"]}>Open deals</h2>
			<div className={styles["container"]}>
				{gallery.map((item, index) => {
					return (
						<div className={styles["card-item"]} key={index}>
							<div className={styles["card-inner"]}>
								<img alt="img" className={styles["image"]} src={item.image} />
								<section className={styles["card-content"]}>
									<h3 className={styles["card-title"]}>{item.title}</h3>
									<ul className={styles["card-list"]}>
										<li className={styles["card-list-item"]}>{item.count}</li>
										<li className={styles["card-list-item"]}>
											Yield {item.yield}
										</li>
										<li className={styles["card-list-item"]}>
											Sold {item.sold}
										</li>
										<li className={styles["card-list-item"]}>
											Tiket - {item.tiket}
										</li>
										<li className={styles["card-list-item"]}>
											Days left {item.days}
										</li>
									</ul>
								</section>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export { CardList };
