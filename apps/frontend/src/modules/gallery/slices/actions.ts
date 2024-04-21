import { createAsyncThunk } from "@reduxjs/toolkit";

import { type AsyncThunkConfig } from "~/libs/types/types.js";
import { type GalleryResponseDto } from "~/modules/gallery/gallery.js";

import { galleryApi } from "../gallery.js";
import { name as sliceName } from "./gallery.slice.js";

const getGallery = createAsyncThunk<
	GalleryResponseDto[],
	undefined,
	AsyncThunkConfig
>(`${sliceName}/get-gallery`, async () => {
	return await galleryApi.getGallery();
});

export { getGallery };
