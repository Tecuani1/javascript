// Define el objeto con las canciones y duraciones en segundos
const album = {
    artist: "Sabino",
    songs: [
        { name: "1 Motel california", duration: 301 },
        { name: "2 Tú", duration: 218 },
        { name: "3 Película", duration: 168 },
        { name: "4 Conmigo Siempre", duration: 281 },
        { name: "5 Date Cuenta", duration: 257 },
        { name: "6 Nuevequince", duration: 243 },
        { name: "7 Guapa", duration: 212 },
        { name: "8 Diamante", duration: 199 },
        { name: "9 Me Puse Pedo", duration: 279 },
        { name: "10 ¿Qué Pasó Mi Amor?", duration: 194 },
    ],
};

// Función para convertir la duración a formato de minutos y segundos
function formatDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const remainingSeconds = duration % 60;
    return `${minutes}m ${remainingSeconds}s`;
}

// Función para procesar y ordenar las canciones
function printSortedSongs(album) {
    // Ordenar las canciones por duración de menor a mayor
    const sortedSongs = album.songs.sort((a, b) => a.duration - b.duration);
    
    // Imprimir las canciones con la duración
    sortedSongs.forEach(song => {
        console.log(`${song.name} : ${formatDuration(song.duration)}`);
    });
}

// Llamar a la función para imprimir las canciones ordenadas
printSortedSongs(album);

