import { config } from "~/libs/modules/config/config.js";
import { http } from "~/libs/modules/http/http.js";
import { storage } from "~/libs/modules/storage/storage.js";

import { GalleryApi } from "./gallery-api.js";

const galleryApi = new GalleryApi({
	baseUrl: config.ENV.API.ORIGIN_URL,
	http,
	storage,
});

export { galleryApi };
export { type GalleryResponseDto } from "./libs/types/types.js";
export { actions, reducer } from "./slices/gallery.js";
