const geoResources = [
    // =========================================================================
    // --- BASES ESTRATÉGICAS NACIONAIS  ---
    // =========================================================================
    {
        id: "br-inde",
        scope: "BR",
        name: "INDE - Visualizador Nacional (IGEO)",
        url: "https://visualizador.inde.gov.br/",
        description: "A porta de entrada oficial. Cruza dados do IBGE, Incra, Exército e MMA em um só mapa.",
        tags: ["Gestao", "Vetores", "Metadados", "Oficial"]
    },
    {
        id: "br-ana-hidroweb",
        scope: "BR",
        name: "ANA - HidroWeb v2",
        url: "https://www.snirh.gov.br/hidroweb/mapa",
        description: "Essencial para irrigação. Dados de estações fluviométricas, pluviométricas e outorgas de água.",
        tags: ["Hidrografia", "Irrigacao", "Clima"]
    },
    {
        id: "br-sigef",
        scope: "BR",
        name: "SIGEF - INCRA (Fundiário)",
        url: "https://sigef.incra.gov.br/consultar/parcela/",
        description: "Consulta de propriedades certificadas (Georreferenciamento). Vital para regularização fundiária.",
        tags: ["Fundiario", "Legal", "Propriedades"]
    },
    {
        id: "br-mapbiomas",
        scope: "BR",
        name: "MapBiomas - Coleção 9",
        url: "https://plataforma.mapbiomas.org/",
        description: "Série histórica (1985-hoje) de uso do solo. Identifique áreas de pastagem, soja, cana e floresta.",
        tags: ["Uso do Solo", "Satelite", "Historico"]
    },
    {
        id: "br-inpe-queimadas",
        scope: "BR",
        name: "INPE - BDQueimadas",
        url: "https://terrabrasilis.dpi.inpe.br/queimadas/portal/",
        description: "Monitoramento em tempo real de focos de calor e risco de fogo. Crítico para manejo de safra.",
        tags: ["Queimadas", "Risco", "Tempo Real"]
    },
    {
        id: "br-conab",
        scope: "BR",
        name: "Conab - GeoPortal da Safra",
        url: "https://portaldeinformacoes.conab.gov.br/",
        description: "Monitoramento de safras agrícolas, armazéns e logística de abastecimento.",
        tags: ["Safra", "Economia", "Logistica"]
    },
    {
        id: "br-topografia-ibge",
        scope: "BR",
        name: "IBGE - Banco de Dados Geográficos (BDG)",
        url: "https://bdg.ibge.gov.br/",
        description: "Acesso a cartas topográficas, limites municipais oficiais e malhas territoriais.",
        tags: ["Cartografia", "Topografia", "Limites"]
    },
    {
        id: "br-cptec",
        scope: "BR",
        name: "CPTEC/INPE - Clima e Tempo",
        url: "https://clima.cptec.inpe.br/",
        description: "Modelos numéricos de previsão de tempo e clima sazonal.",
        tags: ["Clima", "Meteorologia"]
    },
    {
        id: "br-embrapa-solos",
        scope: "BR",
        name: "Embrapa - PronaSolos",
        url: "https://geoinfo.dados.embrapa.br/",
        description: "O maior acervo de mapas de solos do Brasil (SiBCS) para planejamento agrícola.",
        tags: ["Solo", "Pedologia", "Aptidao"]
    },
    {
        id: "br-sgb",
        scope: "BR",
        name: "SGB/CPRM - GeoSGB",
        url: "https://geosgb.sgb.gov.br/",
        description: "Dados geológicos e de águas subterrâneas (poços artesianos).",
        tags: ["Geologia", "Agua Subterranea"]
    },
    {
        id: "br-dnit",
        scope: "BR",
        name: "DNIT - VGeo (Rodovias)",
        url: "https://vgeo.dnit.gov.br/vgeo/",
        description: "Condição da malha rodoviária federal. Importante para logística de escoamento.",
        tags: ["Logistica", "Infraestrutura"]
    },
    {
        id: "br-cemaden",
        scope: "BR",
        name: "CEMADEN - Mapa Interativo",
        url: "http://www2.cemaden.gov.br/mapainterativo/",
        description: "Monitoramento de desastres naturais, umidade do solo e pluviômetros automáticos.",
        tags: ["Clima", "Risco", "Pluviometria"]
    },

    // =========================================================================
    // --- REGIÃO NORTE ---
    // =========================================================================
    {
        id: "ac-cigma",
        scope: "AC",
        name: "CIGMA - Acre",
        url: "https://sema.ac.gov.br/cigma/",
        description: "Sala de situação de monitoramento hidrometeorológico e ambiental.",
        tags: ["Ambiental", "Hidrografia"]
    },
    {
        id: "am-processamento",
        scope: "AM",
        name: "IED - Amazonas",
        url: "https://www.ied.am.gov.br/",
        description: "Infraestrutura Estadual de Dados do Amazonas. Base cartográfica da Amazônia.",
        tags: ["IDE", "Cartografia"]
    },
    {
        id: "ap-geo",
        scope: "AP",
        name: "Geoportal do Amapá (SEMA)",
        url: "https://sema.portal.ap.gov.br/conteudo/servicos-e-informacoes/base-cartografica",
        description: "Dados de zoneamento ecológico-econômico do estado.",
        tags: ["Ambiental", "Zoneamento"]
    },
    {
        id: "pa-sislam",
        scope: "PA",
        name: "SISLAM - Pará",
        url: "https://monitoramento.semas.pa.gov.br/sislam/",
        description: "Sistema de Licenciamento Ambiental e Monitoramento. Crucial para o CAR no PA.",
        tags: ["Ambiental", "Licenciamento", "CAR"]
    },
    {
        id: "ro-geo",
        scope: "RO",
        name: "GeoRondônia",
        url: "https://geoportal.sedam.ro.gov.br/",
        description: "Portal focado em regularização fundiária e monitoramento de desmatamento.",
        tags: ["Ambiental", "Fundiario"]
    },
    {
        id: "rr-femarh",
        scope: "RR",
        name: "FEMARH - Roraima",
        url: "http://www.femarh.rr.gov.br/",
        description: "Dados de licenciamento e recursos hídricos de Roraima.",
        tags: ["Ambiental", "Licenciamento"]
    },
    {
        id: "to-geo",
        scope: "TO",
        name: "GeoTocantins",
        url: "https://seplan.to.gov.br/geoprocessamento/",
        description: "Zoneamento Ecológico-Econômico (ZEE) do Tocantins.",
        tags: ["Zoneamento", "Planejamento"]
    },

    // =========================================================================
    // --- REGIÃO NORDESTE ---
    // =========================================================================
    {
        id: "al-geo",
        scope: "AL",
        name: "Alagoas em Dados",
        url: "http://dados.al.gov.br/",
        description: "Portal de dados abertos e mapas temáticos de Alagoas.",
        tags: ["Dados Abertos", "Socioeconomia"]
    },
    {
        id: "ba-seia",
        scope: "BA",
        name: "SEIA - Bahia",
        url: "http://www.seia.ba.gov.br/",
        description: "Sistema Estadual de Informações Ambientais e de Recursos Hídricos.",
        tags: ["Ambiental", "Hidrografia", "Licenciamento"]
    },
    {
        id: "ba-ide",
        scope: "BA",
        name: "IDE Bahia",
        url: "https://geoportal.ide.ba.gov.br/",
        description: "Geoportal oficial com a cartografia sistemática do estado.",
        tags: ["IDE", "Cartografia"]
    },
    {
        id: "ce-ipece",
        scope: "CE",
        name: "Ceará em Mapas (IPECE)",
        url: "https://www2.ipece.ce.gov.br/cearaemmapas/",
        description: "Ferramenta interativa com dados hídricos, rodoviários e agrícolas.",
        tags: ["Estatistica", "Infraestrutura"]
    },
    {
        id: "ma-geo",
        scope: "MA",
        name: "IMESC - Maranhão",
        url: "http://imesc.ma.gov.br/portal/geo",
        description: "Instituto Maranhense de Estudos Socioeconômicos e Cartográficos.",
        tags: ["Cartografia", "Planejamento"]
    },
    {
        id: "pb-aesa",
        scope: "PB",
        name: "AESA - Paraíba (Águas)",
        url: "http://www.aesa.pb.gov.br/",
        description: "Monitoramento de açudes e gestão de recursos hídricos no semiárido.",
        tags: ["Hidrografia", "Agua"]
    },
    {
        id: "pe-condeo",
        scope: "PE",
        name: "CONDEPE/FIDEM - PE",
        url: "http://www.condepefidem.pe.gov.br/",
        description: "Agência de planejamento com base cartográfica atualizada.",
        tags: ["Planejamento", "Mapas"]
    },
    {
        id: "pi-cpro",
        scope: "PI",
        name: "CPRO - Piauí",
        url: "http://www.cpro.pi.gov.br/",
        description: "Centro de Pesquisas Econômicas e Sociais do Piauí.",
        tags: ["Estatistica", "Economia"]
    },
    {
        id: "rn-idema",
        scope: "RN",
        name: "IDEMA - Rio Grande do Norte",
        url: "http://www.idema.rn.gov.br/",
        description: "Instituto de Desenvolvimento Sustentável e Meio Ambiente.",
        tags: ["Ambiental", "Sustentabilidade"]
    },
    {
        id: "se-geo",
        scope: "SE",
        name: "Atlas Digital de Sergipe",
        url: "https://atlas.srh.se.gov.br/",
        description: "Foco em recursos hídricos e geologia do estado.",
        tags: ["Hidrografia", "Geologia"]
    },

    // =========================================================================
    // --- REGIÃO CENTRO-OESTE ---
    // =========================================================================
    {
        id: "df-sisdia",
        scope: "DF",
        name: "SISDIA - Distrito Federal",
        url: "https://www.geoportal.seduh.df.gov.br/",
        description: "Sistema de Informação Territorial e Urbana do DF. Altíssima precisão.",
        tags: ["Urbano", "Cadastro"]
    },
    {
        id: "go-sieg",
        scope: "GO",
        name: "SIEG - Goiás",
        url: "http://www.sieg.go.gov.br/",
        description: "Sistema Estadual de Geoinformação. Referência nacional em integração de dados.",
        tags: ["IDE", "Gestao", "Mapas"]
    },
    {
        id: "mt-simcar",
        scope: "MT",
        name: "SIMCAR - Mato Grosso",
        url: "https://monitoramento.sema.mt.gov.br/simcar/",
        description: "Portal do Cadastro Ambiental Rural de MT. Indispensável para o Agronegócio.",
        tags: ["Ambiental", "CAR", "Legal"]
    },
    {
        id: "mt-seplan",
        scope: "MT",
        name: "Geoportal SEPLAN - MT",
        url: "http://www.seplan.mt.gov.br/",
        description: "Dados de infraestrutura, logística e zoneamento socioeconômico.",
        tags: ["Logistica", "Economia"]
    },
    {
        id: "ms-geo",
        scope: "MS",
        name: "SISLA - Mato Grosso do Sul",
        url: "http://www.imasul.ms.gov.br/",
        description: "Licenciamento ambiental e monitoramento de recursos naturais.",
        tags: ["Ambiental", "Licenciamento"]
    },

    // =========================================================================
    // --- REGIÃO SUDESTE ---
    // =========================================================================
    {
        id: "es-geo",
        scope: "ES",
        name: "GEOBASES - Espírito Santo",
        url: "https://geobases.es.gov.br/",
        description: "Sistema integrado de bases geoespaciais do ES. Ortofotocartas atualizadas.",
        tags: ["IDE", "Ortorfoto"]
    },
    {
        id: "mg-ide",
        scope: "MG",
        name: "IDE-SISEMA (Minas Gerais)",
        url: "https://idesisema.meioambiente.mg.gov.br/",
        description: "A mais completa base ambiental de MG. Infraestrutura de Dados Espaciais.",
        tags: ["IDE", "Ambiental", "Mineracao"]
    },
    {
        id: "rj-geo",
        scope: "RJ",
        name: "GeoINEA - Rio de Janeiro",
        url: "http://www.inea.rj.gov.br/geoinformacao/",
        description: "Portal do Instituto Estadual do Ambiente. Foco em unidades de conservação.",
        tags: ["Ambiental", "Unidades de Conservacao"]
    },
    {
        id: "sp-datageo",
        scope: "SP",
        name: "DataGeo - São Paulo",
        url: "http://datageo.ambiente.sp.gov.br/",
        description: "Infraestrutura de Dados Espaciais Ambientais. Base para licenciamento em SP.",
        tags: ["IDE", "Ambiental", "Licenciamento"]
    },
    {
        id: "sp-igc",
        scope: "SP",
        name: "IGC - Cartografia SP",
        url: "http://www.igc.sp.gov.br/",
        description: "Instituto Geográfico e Cartográfico. Mapas históricos e divisas municipais precisas.",
        tags: ["Cartografia", "Limites", "Historico"]
    },
    {
        id: "sp-iea",
        scope: "SP",
        name: "IEA - Estatísticas Agrícolas SP",
        url: "http://www.iea.agricultura.sp.gov.br/",
        description: "Instituto de Economia Agrícola. Dados de preços, safra e mercado.",
        tags: ["Economia", "Safra", "Mercado"]
    },

    // =========================================================================
    // --- REGIÃO SUL ---
    // =========================================================================
    {
        id: "pr-geo",
        scope: "PR",
        name: "GeoParaná (IAT)",
        url: "https://www.iat.pr.gov.br/",
        description: "Portal do Instituto Água e Terra. Dados fundiários, ambientais e cartográficos.",
        tags: ["Ambiental", "Terras", "Agua"]
    },
    {
        id: "rs-iede",
        scope: "RS",
        name: "IEDE - Rio Grande do Sul",
        url: "https://iede.rs.gov.br/",
        description: "Portal centralizador de geodados do RS. Referência em metadados.",
        tags: ["IDE", "Metadados"]
    },
    {
        id: "sc-sde",
        scope: "SC",
        name: "SDE - Santa Catarina",
        url: "http://www.sde.sc.gov.br/",
        description: "Secretaria de Desenvolvimento Econômico. Dados de infraestrutura industrial e rural.",
        tags: ["Economia", "Infraestrutura"]
    },
    {
        id: "sc-epagri",
        scope: "SC",
        name: "Epagri/Ciram (Clima SC)",
        url: "https://ciram.epagri.sc.gov.br/",
        description: "Referência em monitoramento agroclimático e ambiental em Santa Catarina.",
        tags: ["Clima", "Agricultura", "Tempo"]
    }
];