$(document).ready(function () {
    $('#buscarHeroe').click(function (event) {
        event.preventDefault();
        let nameHero = $('#idHeroe').val(); // Captura el valor del input
        console.log(typeof (nameHero));
        if (nameHero === '' || isNaN(nameHero)) {
            alert('Por favor, ingresa un ID de héroe válido.');
            return;
        }
        // Llamada a la API
        $.ajax({
            url: `https://superheroapi.com/api.php/4905856019427443/${nameHero}`,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                if (data && data.name) {
                    cardLoaded(data);
                    chartLoaded(data);
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
    // Creación de Gráfico CanvaJS
    function chartLoaded (data) {
        const heroName = data.name || 'Nombre no disponible';
        const heroPower = data.powerstats.power || 'Desconocido';
        const heroIntelligence = data.powerstats.intelligence || 'Desconocido';
        const heroStrength = data.powerstats.strength || 'Desconocido';
        const heroSpeed = data.powerstats.speed || 'Desconocido';
        const heroDurability = data.powerstats.durability || 'Desconocido';
        const heroCombat = data.powerstats.combat || 'Desconocido';

        $("#chartContainer").CanvasJSChart({ 
            title: { 
                text: `Estadísticas de Poder para ${heroName}`,
                fontSize: 24
            }, 
            axisY: { 
                title: "Products in %" 
            }, 
            legend :{ 
                verticalAlign: "bottom"
            }, 
            data: [ 
            { 
                type: "pie", 
                showInLegend: true, 
                toolTipContent: "{label} <br/> {y} %", 
                indexLabel: "{y} %", 
                dataPoints: [ 
                    { label: "Poder",  y: heroPower, legendText: "Poder" }, 
                    { label: "Inteligencia", y: heroIntelligence, legendText: "Inteligencia" }, 
                    { label: "Fuerza",   y: heroStrength,  legendText: "Fuerza" }, 
                    { label: "Velocidad",   y: heroSpeed,  legendText: "Velocidad"}, 
                    { label: "Resistencia",   y: heroDurability,  legendText: "Resistencia" }, 
                    { label: "Combate",   y: heroCombat, legendText: "Combate" } 
                ] 
            } 
            ] 
        }); 
    }
});

