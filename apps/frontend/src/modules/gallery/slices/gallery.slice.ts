import { createSlice } from "@reduxjs/toolkit";

import { DataStatus } from "~/libs/enums/enums.js";
import { type ValueOf } from "~/libs/types/types.js";
import { type GalleryResponseDto } from "~/modules/gallery/gallery.js";

import { getGallery } from "./actions.js";

type State = {
	dataStatus: ValueOf<typeof DataStatus>;
	gallery: GalleryResponseDto[];
};

const initialState: State = {
	dataStatus: DataStatus.IDLE,
	gallery: [],
};

const { actions, name, reducer } = createSlice({
	extraReducers(builder) {
		builder.addCase(getGallery.fulfilled, (state, action) => {
			state.gallery = action.payload;
			state.dataStatus = DataStatus.FULFILLED;
		});
		builder.addCase(getGallery.pending, (state) => {
			state.dataStatus = DataStatus.PENDING;
		});
		builder.addCase(getGallery.rejected, (state) => {
			state.gallery = [];
			state.dataStatus = DataStatus.REJECTED;
		});
	},
	initialState,
	name: "gallery",
	reducers: {},
});

export { actions, name, reducer };
