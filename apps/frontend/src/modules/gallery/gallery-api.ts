import { APIPath, ContentType } from "~/libs/enums/enums.js";
import { BaseHTTPApi } from "~/libs/modules/api/api.js";
import { type HTTP } from "~/libs/modules/http/http.js";
import { type Storage } from "~/libs/modules/storage/storage.js";

import { GalleryApiPath } from "./libs/enums/enums.js";
import { type GalleryResponseDto } from "./libs/types/types.js";

type Constructor = {
	baseUrl: string;
	http: HTTP;
	storage: Storage;
};

class GalleryApi extends BaseHTTPApi {
	public constructor({ baseUrl, http, storage }: Constructor) {
		super({ baseUrl, http, path: APIPath.GALLERY, storage });
	}

	public async getGallery(): Promise<GalleryResponseDto[]> {
		const response = await this.load(
			this.getFullEndpoint(GalleryApiPath.ROOT, {}),
			{
				contentType: ContentType.JSON,
				hasAuth: true,
				method: "GET",
			},
		);

		return await response.json<GalleryResponseDto[]>();
	}
}

export { GalleryApi };
