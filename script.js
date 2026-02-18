document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// Estado global da aplicação
const state = {
    map: null,
    geojsonLayer: null,
    selectedScope: 'BR'
};

// Dicionário para traduzir o GeoJSON (que tem nomes) para seu Sistema (que usa Siglas)
const estadoParaSigla = {
    'Acre': 'AC', 'Alagoas': 'AL', 'Amapá': 'AP', 'Amazonas': 'AM', 'Bahia': 'BA',
    'Ceará': 'CE', 'Distrito Federal': 'DF', 'Espírito Santo': 'ES', 'Goiás': 'GO',
    'Maranhão': 'MA', 'Mato Grosso': 'MT', 'Mato Grosso do Sul': 'MS', 'Minas Gerais': 'MG',
    'Pará': 'PA', 'Paraíba': 'PB', 'Paraná': 'PR', 'Pernambuco': 'PE', 'Piauí': 'PI',
    'Rio de Janeiro': 'RJ', 'Rio Grande do Norte': 'RN', 'Rio Grande do Sul': 'RS',
    'Rondônia': 'RO', 'Roraima': 'RR', 'Santa Catarina': 'SC', 'São Paulo': 'SP',
    'Sergipe': 'SE', 'Tocantins': 'TO'
};

function initApp() {
    const mapContainer = document.getElementById('map-container');
    if (mapContainer && mapContainer.offsetParent !== null) {
        initMap();
    }
    renderResources('BR');
}

function initMap() {
    // 1. Configuração de Limites (Trava no Brasil)
    const southWest = L.latLng(-36.0, -76.0);
    const northEast = L.latLng(7.0, -32.0);
    const bounds = L.latLngBounds(southWest, northEast);

    // ==================================================================
    // 2. DEFINIÇÃO DAS CAMADAS BASE (Basemaps)
    // ==================================================================
    
    // A. Mapa Clean (Rápido e Leve) - Padrão atual
    const cartoLight = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO',
        maxZoom: 19
    });

    // B. Satélite (Essencial para Agro) - Fonte: ESRI World Imagery
    const esriSat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri & Contributors'
    });

    // C. Topografia via WMS (O exemplo da sua documentação!)
    // Nota: WMS é gerado no servidor, pode ser um pouco mais lento que tiles.
    const mundialisTopo = L.tileLayer.wms('https://ows.mundialis.de/services/service?', {
        layers: 'TOPO-WMS', // Camada de topografia
        format: 'image/png',
        transparent: true,
        attribution: '&copy; Mundialis'
    });

    // ==================================================================
    // 3. INICIALIZAÇÃO DO MAPA
    // ==================================================================
    
    state.map = L.map('map-container', {
        center: [-14.2350, -51.9253],
        zoom: 4,
        minZoom: 3,
        maxBounds: bounds,
        layers: [cartoLight] // Começa com o mapa Clean selecionado
    });

    // ==================================================================
    // 4. CONTROLE DE CAMADAS (O "Menu" de mapas)
    // ==================================================================
    
    const baseMaps = {
        "Mapa Clean (Padrão)": cartoLight,
        "Satélite (ESRI)": esriSat,
        "Relevo/Topografia (WMS)": mundialisTopo
    };

    // Criamos o objeto de sobreposição vazio, vamos preencher após carregar o GeoJSON
    const overlayMaps = {}; 

    // Adiciona o controle no canto superior direito
    const layerControl = L.control.layers(baseMaps, overlayMaps, { collapsed: true }).addTo(state.map);

    // ==================================================================
    // 5. CARREGAMENTO DO GEOJSON (ESTADOS)
    // ==================================================================
    
    fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson')
        .then(response => response.json())
        .then(data => {
            state.geojsonLayer = L.geoJson(data, {
                style: styleFeature,
                onEachFeature: onEachFeature
            });

            // Adiciona a camada ao mapa
            state.geojsonLayer.addTo(state.map);
            
            // Adiciona a camada ao Controle dinamicamente
            layerControl.addOverlay(state.geojsonLayer, "Limites Estaduais");

            // Ajusta zoom
            state.map.fitBounds(state.geojsonLayer.getBounds());
        })
        .catch(err => console.error("Erro ao carregar GeoJSON:", err));
}

// Estilo normal do estado
function styleFeature(feature) {
    return {
        fillColor: '#2E7D32',
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
}

// Interatividade
function onEachFeature(feature, layer) {
    // Recupera a sigla usando o dicionário
    const nomeGeoJSON = feature.properties.name;
    const sigla = estadoParaSigla[nomeGeoJSON];

    if (sigla) {
        // Adiciona tooltip (balãozinho) ao passar o mouse
        layer.bindTooltip(nomeGeoJSON, {
            permanent: false,
            direction: "center",
            className: "state-label"
        });
    }

    layer.on({
        mouseover: (e) => {
            const layer = e.target;
            layer.setStyle({
                weight: 3,
                color: '#FFC107', // Amarelo destaque
                dashArray: '',
                fillOpacity: 0.8
            });
            layer.bringToFront();
        },
        mouseout: (e) => {
            state.geojsonLayer.resetStyle(e.target);
        },
        click: (e) => {
            if (sigla) {
                selecionarUF(sigla);
                // Dá um zoom sutil no estado clicado
                state.map.fitBounds(e.target.getBounds());
            } else {
                console.warn("Sigla não encontrada para:", nomeGeoJSON);
            }
        }
    });
}

// Função Unificada de Seleção
window.selecionarUF = function(sigla) {
    state.selectedScope = sigla;
    
    // Atualiza Dropdown (Mobile)
    const select = document.getElementById('uf-select');
    if(select) select.value = sigla;

    // Atualiza Título
    const nomeDisplay = select && select.options[select.selectedIndex] ? 
                        select.options[select.selectedIndex].text : sigla;
    
    const titulo = document.getElementById('titulo-resultados');
    if(titulo) titulo.innerText = `Recursos: ${nomeDisplay}`;
    
    renderResources(sigla);
};

// Renderização dos Cards
function renderResources(scopeFilter) {
    const container = document.getElementById('grid-cards');
    const contador = document.getElementById('contador-resultados');
    
    if (!container) return;

    container.innerHTML = '';

    // Filtra: Mostra recursos DO ESTADO + NACIONAIS (BR)
    // Se quiser ver SÓ do estado, remova a parte "|| r.scope === 'BR'"
    const filtered = geoResources.filter(r => r.scope === scopeFilter);

    if(contador) contador.innerText = `${filtered.length} bases encontradas`;

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="material-icons" style="font-size: 48px; color: #ccc;">info</span>
                <p>Nenhuma base específica cadastrada para ${scopeFilter} ainda.</p>
                <button onclick="selecionarUF('BR')" class="btn-voltar">Ver Bases Nacionais</button>
            </div>`;
        return;
    }

    filtered.forEach(resource => {
        const card = document.createElement('article');
        card.className = 'resource-card';
        
        const tagsHtml = resource.tags ? resource.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';

        card.innerHTML = `
            <div class="card-header">
                <span class="badge-uf ${resource.scope === 'BR' ? 'badge-br' : 'badge-est'}">${resource.scope}</span>
                <h4>${resource.name}</h4>
            </div>
            <div class="card-body">
                <p>${resource.description}</p>
                <div class="tags-container">${tagsHtml}</div>
            </div>
            <div class="card-footer">
                <a href="${resource.url}" target="_blank" class="btn-acessar">
                    Acessar <span class="material-icons" style="font-size:16px">open_in_new</span>
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}

// Reset para Brasil
window.filtrarPorEscopo = function(escopo) {
    selecionarUF(escopo);
    if(state.map && state.geojsonLayer) {
        state.map.fitBounds(state.geojsonLayer.getBounds());
    }
};