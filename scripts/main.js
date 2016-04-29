var map = L.map('mapid', {
    center: [51.505, -0.09],
    zoom: 13
});

/*
GMaps:
	Note the difference in the "lyrs" parameter in the URL:
	Hybrid: s,h;
	Satellite: s;
	Streets: m;
	Terrain: p;
*/

function LayerFormation(name) {
    var mapCoord = {
        "openstreetmap": {
            src: "http://{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png",
            params: {
                maxZoom: 20,
                subdomains: ['tile-a', 'tile-b', 'tile-c']
            }
        },

        "google": {
            src: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
            params: {
                maxZoom: 20,
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
            }
        },

        3: {
            src: "http://{s}.tiles.mapbox.com/v3/examples.map-cnkhv76j/{z}/{x}/{y}.png",
            params: {
                maxZoom: 20,
                subdomains: ['a', 'b', 'c']
            }
        }
    }

    return mapCoord[name];
}

var layerObject = new LayerFormation("google");
L.tileLayer(layerObject['src'], layerObject["params"]).addTo(map);