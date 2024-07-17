// import { createSlice } from '@reduxjs/toolkit';
// // import { fetchJobs } from './jobAsyncActions';
//
// const initialState = {
//     filter: [],
//     status: 'idle',
// };
//
// const filterSlice = createSlice({
//     name: 'filter',
//     initialState,
//     reducers: {
//         setFilter(state, action) {
//             state.filter = action.payload;
//         },
//     },
//     // extraReducers: (builder) => {
//     //     builder
//     //         .addCase(fetchJobs.pending, (state) => {
//     //             state.status = 'loading';
//     //             state.jobs = [];
//     //         })
//     //         .addCase(fetchJobs.fulfilled, (state, action) => {
//     //             state.status = 'succeeded';
//     //             state.jobs = action.payload;
//     //         })
//     //         .addCase(fetchJobs.rejected, (state, action) => {
//     //             state.status = 'failed';
//     //             state.jobs = [];
//     //         });
//     // },
// });
//
// export const { setFilter } = filterSlice.actions;
// export default filterSlice.reducer;
