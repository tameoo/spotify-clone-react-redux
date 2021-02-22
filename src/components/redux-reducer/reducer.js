const initialState = {
    user: null,
    playlists: [],
    playlist: null,
    playing: false,
    item: null,
    // token: 'BQBOjJm9VIIURpTlFN4ERVmUkKhdJOAPfR7ki6PRpG3AATHZ7aI-5huKod4RdNUPnmCBe6oDmzLQyzIC1GNuN9VlZ1k7T9Pzjhkxs162J4tuiM0WrK6ydmPpZP5vbQUcvn0qx7EAxcBhpxq5x_sGsN05wolpSmgGr8YQM8LNSARZEP5b'
    token: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_TRACK':
            return {
                ...state,
                tracks: action.tracks
            }
        
        case 'SET_FEATURES':
            return {
                ...state,
                features: action.features
            }
        
        case 'SET_NEWRELEASE':
            return {
                ...state,
                newReleases: action.newReleases
            }
        
        case 'SET_TOPLIST':
            return {
                ...state,
                toplist: action.toplist
            }

        case 'SET_PLAYLIST_IMAGE':
            return {
                ...state,
                image: action.image
            }
            
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist
            }
            
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.category
            }

        case 'SET_CATEGORY_PLAYLIST':
            return {
                ...state,
                categoryPlaylist: action.categoryPlaylist
            }
            
        default:
            return state;
    }
}

export default reducer;