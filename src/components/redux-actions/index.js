const setUser = (user) =>{
    return {
        type: "SET_USER",
        user
    };    
}

const setToken = (token) =>{
    return {
        type: "SET_TOKEN",
        token
    };    
}

const setPlaylists = (playlists) =>{
    return {
        type: "SET_PLAYLISTS",
        playlists
    };    
}

const setTrack = (tracks) => {
    return {
        type: 'SET_TRACK',
        tracks
    }
}

const setFeture = (features) => {
    return {
        type: 'SET_FEATURES',
        features
    }
}

const setNewReleases = (newReleases) => {
    return {
        type: 'SET_NEWRELEASE',
        newReleases
    }
}

const setToplist = (toplist) => {
    return {
        type: 'SET_TOPLIST',
        toplist
    }
}

const setPlaylist = (playlist) => {
    return {
        type: 'SET_PLAYLIST',
        playlist
    }
}
const setCategory = (category) => {
    return {
        type: 'SET_CATEGORY',
        category
    }
}

const setCategoryPlaylist = (categoryPlaylist) => {
    return {
        type: 'SET_CATEGORY_PLAYLIST',
        categoryPlaylist
    }
}

export {
    setUser,
    setToken,
    setPlaylists,
    setPlaylist,
    setTrack,
    setFeture,
    setNewReleases,
    setToplist,
    setCategory,
    setCategoryPlaylist
}
