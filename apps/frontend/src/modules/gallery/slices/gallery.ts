import { getGallery } from "./actions.js";
import { actions } from "./gallery.slice.js";

const allActions = {
	...actions,
	getGallery,
};

export { reducer } from "./gallery.slice.js";
export { allActions as actions };
