import { type AppRoute } from "~/libs/enums/enums.js";

import { type ValueOf } from "./value-of.type.js";

type MenuItem = {
	href: ValueOf<typeof AppRoute>;
	label: string;
};

export { type MenuItem };
