window.onload = () => {
    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_artist_el = document.getElementById('song-artist');
    const song_next_up_el = document.getElementById('song-next-up');

    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('prev-btn');
    const next_btn = document.getElementById('next-btn');

    const audio_player = document.getElementById('music-player');

    let current_song_index;
    let next_song_index;

    let songs = [
        {
            title: 'She Found Now',
            artist: 'My Bloody Valentine',
            song_path: 'Music/she found now - m b v - my bloody valentine.mp3',
            img_path: 'images/song-1.jpg'
        },
        {
            title: 'itkanbe [sonice]',
            artist: 'Knxwledge',
            song_path: 'Music/itkanbe [sonice].mp3',
            img_path: 'images/song-2.jpg'
        },
        {
            title: 'Kiss My Superbowl Ring',
            artist: 'The Garden',
            song_path: 'Music/The Garden - Kiss My Super Bowl Ring (Full Album Stream).mp3',
            img_path: 'images/song-3.jpg'
        },
        {
            title: 'One More Hour',
            artist: 'Tame Impala',
            song_path: 'Music/Tame Impala - One More Hour (Official Audio).mp3',
            img_path: 'images/song-4.jpg'
        },
    ]
    
    play_btn.addEventListener('click', TogglePlaySong);
    next_btn.addEventListener('click', () => ChangeSong());
    prev_btn.addEventListener('click', () => ChangeSong(false));

    InitPlayer();

    function InitPlayer() {
        current_song_index = 0;
        next_song_index = current_song_index + 1;
        UpdatePlayer();
    }

    function UpdatePlayer() {
        let song = songs[current_song_index];

        song_img_el.style = "background-image: url('" + song.img_path + "')";
        song_title_el.innerText = song.title;
        song_artist_el.innerText = song.artist;

        song_next_up_el.innerText = songs[next_song_index].title + " by " + songs[next_song_index].artist;

        audio_player.src = song.song_path;
    }

    function TogglePlaySong () {
        if (audio_player.paused) {
            audio_player.play();
            play_btn_icon.classList.remove('fa-play');
            play_btn_icon.classList.add('fa-pause');
        } else {
            audio_player.pause();
            play_btn_icon.classList.add('fa-play');
            play_btn_icon.classList.remove('fa-pause');
        }
    }

    function ChangeSong (next = true) {
        if (next) {
            current_song_index++;
            next_song_index = current_song_index + 1;

            if (current_song_index > songs.length -1) {
                current_song_index = 0;
                next_song_index = current_song_index + 1;
            }

            if (next_song_index > songs.length -1) {
                next_song_index = 0;
            }
        } else {
            current_song_index--;
            next_song_index = current_song_index +1;

            if (current_song_index < 0) {
                current_song_index = songs.length - 1;
                next_song_index = 0;
            }
        }

        UpdatePlayer();
        TogglePlaySong();
    }
}