$(document).ready(function () {
    $('#buscarHeroe').click(function (event) {
        event.preventDefault();
        let nameHero = $('#idHeroe').val(); // Captura el valor del input
        console.log(typeof (nameHero));
        if (nameHero === '' || isNaN(nameHero)) {
            alert('Por favor, ingresa un ID de héroe válido.');
            return;
        }

        $.ajax({
            url: `https://superheroapi.com/api.php/4905856019427443/${nameHero}`,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                if (data && data.name) {
                    cardLoaded(data);

                } else {
                    alert('No se encontró información para el héroe con ID ' + nameHero);
                }
            },
            error: function (error) {
                console.log('Error al obtener los datos:', error);
            }
        });
    });
    function cardLoaded(data) {
        // Crear el contenido de la card
        const heroName = data.name || 'Nombre no disponible';
        const heroImage = data.image.url || 'https://via.placeholder.com/150'; // Imagen por defecto
        const heroDescription = data.biography['full-name'] || 'Descripción no disponible';
        const heroPublisher = data.biography['publisher'] || 'Editorial no disponible';
        const heroIntelligence = data.powerstats.intelligence || 'Desconocido';
        const heroStrength = data.powerstats.strength || 'Desconocido';
        const heroSpeed = data.powerstats.speed || 'Desconocido';
        const heroDurability = data.powerstats.durability || 'Desconocido';
        const heroPower = data.powerstats.power || 'Desconocido';
        const heroCombat = data.powerstats.combat || 'Desconocido';
        const heroConnections = data.connections['group-affiliation'] || 'Desconocido';
        const heroWork = data.work.occupation || 'Desconocido';
        const heroFirstAppearance = data.biography['first-appearance'] || 'Aparición no disponible';
        const heroHeight = data.appearance.height || 'Desconocido';
        const heroWeight = data.appearance.weight || 'Desconocido';
        const heroAliases = data.biography['aliases'] || 'Desconocido';

        // Crear el HTML de la tarjeta con Bootstrap

        const cardHTML = `
            <div class="card">
                <div class="row gap-0">
                    <div class="col-md-4">
                        <img src="${heroImage}" class="w-100 h-100 object-fit-cover" alt="Imagen de ${heroName}">
                    </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Nombre: ${heroName}</h5>
                        <p class="card-text">
                            <strong>Nombre:</strong> ${heroDescription} <br>
                            <strong>Inteligencia:</strong> ${heroIntelligence} <br>
                            <strong>Fuerza:</strong> ${heroStrength} <br>
                            <strong>Velocidad:</strong> ${heroSpeed} <br>
                            <strong>Durabilidad:</strong> ${heroDurability} <br>
                            <strong>Poder:</strong> ${heroPower} <br>
                            <strong>Combate:</strong> ${heroCombat} <br>
                            <strong>Conexiones:</strong> ${heroConnections} <br>
                            <strong>Publicado por:</strong> ${heroPublisher} <br>
                            <strong>Ocupación:</strong> ${heroWork} <br>
                            <strong>Primera Aparición:</strong> ${heroFirstAppearance} <br>
                            <strong>Altura:</strong> ${heroHeight} <br>
                            <strong>Peso:</strong> ${heroWeight} <br>
                            <strong>Alianzas:</strong> ${heroAliases}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Insertar la card en el DOM
        $('#resultadoHeroe').html(cardHTML); // Asegúrate de tener un contenedor con id 'resultadoHeroe' en tu HTML
    }
});

