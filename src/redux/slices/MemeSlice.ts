import { createSlice } from '@reduxjs/toolkit'

const MemeSlice = createSlice({
    name: "meme",
    initialState:{
        id: null,
        img_src: "src",
        caption: "caption"
    },
    reducers:{
        chooseId: (state, action) => {state.id = action.payload},
        chooseImg: (state, action) => {state.img_src = action.payload},
        chooseCaption: (state, action) => {state.caption = action.payload}
    }
})

export const meme = MemeSlice.reducer
export const {chooseId, chooseImg, chooseCaption} = MemeSlice.actions