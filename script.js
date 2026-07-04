const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("songs.json")
    .then(res => res.json())
    .then(data => {

        const song = data.find(s => s.id == id);

        if (!song) {
            document.getElementById("title").innerText = "Song not found";
            return;
        }

        document.getElementById("title").innerText =
            `${song.artist} - ${song.title}`;
    });