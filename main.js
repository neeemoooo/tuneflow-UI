const musicInfoListElements = document.querySelectorAll(".music__info");

const toggleMusicPlayer = (state,musicPlayerState) => { 
    document.getElementById("music-player-element").classList[musicPlayerState]("music-player--hidden");

    document.getElementById("header-element").classList[state]("header--hidden");
    document.getElementById("search-element").classList[state]("search--hidden");
    document.getElementById("music-genre-element").classList[state]("music-genre--hidden");
};

musicInfoListElements.forEach(music => {
    music.addEventListener("click",() => toggleMusicPlayer("add","remove"));
});

document.getElementById("back-page-button-element")
.addEventListener("click",() => toggleMusicPlayer("remove","add"));