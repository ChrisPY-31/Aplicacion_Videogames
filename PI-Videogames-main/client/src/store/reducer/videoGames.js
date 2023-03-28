import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    videoGames:[],
    videoGameId:[],
    allGerens:[],
    plataformas:[],
    success:false
} 
export const videoGamesSlice = createSlice({
    name: 'videoGames',
    initialState,
    reducers: {
        getAllGames:(state , action) =>{
            state.videoGames = action.payload
        },
        getDetaild:(state , action) =>{
            state.videoGameId = action.payload
        },
        getAllGerens:(state , action) =>{
            state.allGerens = action.payload
        },
        getNameGame:(state , action) =>{
            state.videoGames = action.payload
        },
        getAllPlataformas:(state , action) =>{
            state.plataformas = action.payload
        },
        getAscDesc:(state , action) =>{
            if (action.payload === "asc") {
                state.videoGames = state.videoGames.sort((a, b) =>
                  a.name > b.name ? 1 : -1
                );
              } else if (action.payload === "desc") {
                state.videoGames = state.videoGames.sort((a, b) =>
                  a.name > b.name ? -1 : 1
                );
              }
        },
        getRaiting:(state , action) =>{
            if (action.payload === "Rasc") {
                state.videoGames = state.videoGames.sort((a, b) =>
                  a.rating > b.rating ? 1 : -1
                );
              } else if (action.payload === "Rdesc") {
                state.videoGames = state.videoGames.sort((a, b) =>
                  a.rating > b.rating ? -1 : 1
                );
              }
        },
        getValidation:(state)=>{

          state.success = !state.success
        }
       
    }
});


// Action creators are generated for each case reducer function
export const { getAllGames, getDetaild ,getAllGerens , getNameGame , getAllPlataformas , getAscDesc ,getRaiting , getError , getValidation} = videoGamesSlice.actions;