var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_EastDelhiMCDEM_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "East Delhi MC (DEM)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/EastDelhiMCDEM_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8594529.513981, 3322667.020419, 8609681.333573, 3348539.041958]
                            })
                        });
var format_waterway_2 = new ol.format.GeoJSON();
var features_waterway_2 = format_waterway_2.readFeatures(json_waterway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterway_2.addFeatures(features_waterway_2);
var lyr_waterway_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterway_2, 
                style: style_waterway_2,
                interactive: true,
                title: '<img src="styles/legend/waterway_2.png" /> waterway'
            });
var format_2090m_3 = new ol.format.GeoJSON();
var features_2090m_3 = format_2090m_3.readFeatures(json_2090m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2090m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2090m_3.addFeatures(features_2090m_3);
var lyr_2090m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2090m_3, 
                style: style_2090m_3,
                interactive: true,
                title: '<img src="styles/legend/2090m_3.png" /> 209.0 m'
            });
var format_2085m_4 = new ol.format.GeoJSON();
var features_2085m_4 = format_2085m_4.readFeatures(json_2085m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2085m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2085m_4.addFeatures(features_2085m_4);
var lyr_2085m_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2085m_4, 
                style: style_2085m_4,
                interactive: true,
                title: '<img src="styles/legend/2085m_4.png" /> 208.5 m'
            });
var format_2080m_5 = new ol.format.GeoJSON();
var features_2080m_5 = format_2080m_5.readFeatures(json_2080m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2080m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2080m_5.addFeatures(features_2080m_5);
var lyr_2080m_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2080m_5, 
                style: style_2080m_5,
                interactive: true,
                title: '<img src="styles/legend/2080m_5.png" /> 208.0 m'
            });
var format_2075m_6 = new ol.format.GeoJSON();
var features_2075m_6 = format_2075m_6.readFeatures(json_2075m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2075m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2075m_6.addFeatures(features_2075m_6);
var lyr_2075m_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2075m_6, 
                style: style_2075m_6,
                interactive: true,
                title: '<img src="styles/legend/2075m_6.png" /> 207.5 m'
            });
var format_2070m_7 = new ol.format.GeoJSON();
var features_2070m_7 = format_2070m_7.readFeatures(json_2070m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2070m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2070m_7.addFeatures(features_2070m_7);
var lyr_2070m_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2070m_7, 
                style: style_2070m_7,
                interactive: true,
                title: '<img src="styles/legend/2070m_7.png" /> 207.0 m'
            });
var format_2065m_8 = new ol.format.GeoJSON();
var features_2065m_8 = format_2065m_8.readFeatures(json_2065m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2065m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2065m_8.addFeatures(features_2065m_8);
var lyr_2065m_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2065m_8, 
                style: style_2065m_8,
                interactive: true,
                title: '<img src="styles/legend/2065m_8.png" /> 206.5 m'
            });
var format_2060m_9 = new ol.format.GeoJSON();
var features_2060m_9 = format_2060m_9.readFeatures(json_2060m_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2060m_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2060m_9.addFeatures(features_2060m_9);
var lyr_2060m_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2060m_9, 
                style: style_2060m_9,
                interactive: true,
                title: '<img src="styles/legend/2060m_9.png" /> 206.0 m'
            });
var format_2055m_10 = new ol.format.GeoJSON();
var features_2055m_10 = format_2055m_10.readFeatures(json_2055m_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2055m_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2055m_10.addFeatures(features_2055m_10);
var lyr_2055m_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2055m_10, 
                style: style_2055m_10,
                interactive: true,
                title: '<img src="styles/legend/2055m_10.png" /> 205.5 m'
            });
var format_2050m_11 = new ol.format.GeoJSON();
var features_2050m_11 = format_2050m_11.readFeatures(json_2050m_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2050m_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2050m_11.addFeatures(features_2050m_11);
var lyr_2050m_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2050m_11, 
                style: style_2050m_11,
                interactive: true,
                title: '<img src="styles/legend/2050m_11.png" /> 205.0 m'
            });
var format_2045mSafeLvl_12 = new ol.format.GeoJSON();
var features_2045mSafeLvl_12 = format_2045mSafeLvl_12.readFeatures(json_2045mSafeLvl_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2045mSafeLvl_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2045mSafeLvl_12.addFeatures(features_2045mSafeLvl_12);
var lyr_2045mSafeLvl_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2045mSafeLvl_12, 
                style: style_2045mSafeLvl_12,
                interactive: true,
                title: '<img src="styles/legend/2045mSafeLvl_12.png" /> 204.5 m (Safe Lvl)'
            });
var format_InundationBoundary_13 = new ol.format.GeoJSON();
var features_InundationBoundary_13 = format_InundationBoundary_13.readFeatures(json_InundationBoundary_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InundationBoundary_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InundationBoundary_13.addFeatures(features_InundationBoundary_13);
var lyr_InundationBoundary_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_InundationBoundary_13, 
                style: style_InundationBoundary_13,
                interactive: false,
                title: '<img src="styles/legend/InundationBoundary_13.png" /> Inundation Boundary'
            });

lyr_BaseMap_0.setVisible(true);lyr_EastDelhiMCDEM_1.setVisible(true);lyr_waterway_2.setVisible(false);lyr_2090m_3.setVisible(false);lyr_2085m_4.setVisible(false);lyr_2080m_5.setVisible(false);lyr_2075m_6.setVisible(false);lyr_2070m_7.setVisible(false);lyr_2065m_8.setVisible(false);lyr_2060m_9.setVisible(false);lyr_2055m_10.setVisible(false);lyr_2050m_11.setVisible(false);lyr_2045mSafeLvl_12.setVisible(true);lyr_InundationBoundary_13.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_EastDelhiMCDEM_1,lyr_waterway_2,lyr_2090m_3,lyr_2085m_4,lyr_2080m_5,lyr_2075m_6,lyr_2070m_7,lyr_2065m_8,lyr_2060m_9,lyr_2055m_10,lyr_2050m_11,lyr_2045mSafeLvl_12,lyr_InundationBoundary_13];
lyr_waterway_2.set('fieldAliases', {});
lyr_2090m_3.set('fieldAliases', {'Area sq.m': 'Area sq.m', });
lyr_2085m_4.set('fieldAliases', {'Area sq.m': 'Area sq.m', });
lyr_2080m_5.set('fieldAliases', {'Area sq.m': 'Area sq.m', });
lyr_2075m_6.set('fieldAliases', {'Area sq.m': 'Area sq.m', });
lyr_2070m_7.set('fieldAliases', {'Area sq.m': 'Area sq.m', });
lyr_2065m_8.set('fieldAliases', {'Area sq.m': 'Area sq.m', });
lyr_2060m_9.set('fieldAliases', {'Area sq.m': 'Area sq.m', });
lyr_2055m_10.set('fieldAliases', {'Area sq.m': 'Area sq.m', });
lyr_2050m_11.set('fieldAliases', {'Area sq.m': 'Area sq.m', });
lyr_2045mSafeLvl_12.set('fieldAliases', {'Area sq.m': 'Area sq.m', });
lyr_InundationBoundary_13.set('fieldAliases', {});
lyr_waterway_2.set('fieldImages', {});
lyr_2090m_3.set('fieldImages', {'Area sq.m': '', });
lyr_2085m_4.set('fieldImages', {'Area sq.m': '', });
lyr_2080m_5.set('fieldImages', {'Area sq.m': '', });
lyr_2075m_6.set('fieldImages', {'Area sq.m': '', });
lyr_2070m_7.set('fieldImages', {'Area sq.m': '', });
lyr_2065m_8.set('fieldImages', {'Area sq.m': '', });
lyr_2060m_9.set('fieldImages', {'Area sq.m': '', });
lyr_2055m_10.set('fieldImages', {'Area sq.m': '', });
lyr_2050m_11.set('fieldImages', {'Area sq.m': '', });
lyr_2045mSafeLvl_12.set('fieldImages', {'Area sq.m': 'TextEdit', });
lyr_InundationBoundary_13.set('fieldImages', {});
lyr_waterway_2.set('fieldLabels', {});
lyr_2090m_3.set('fieldLabels', {'Area sq.m': 'header label', });
lyr_2085m_4.set('fieldLabels', {'Area sq.m': 'header label', });
lyr_2080m_5.set('fieldLabels', {'Area sq.m': 'header label', });
lyr_2075m_6.set('fieldLabels', {'Area sq.m': 'header label', });
lyr_2070m_7.set('fieldLabels', {'Area sq.m': 'header label', });
lyr_2065m_8.set('fieldLabels', {'Area sq.m': 'header label', });
lyr_2060m_9.set('fieldLabels', {'Area sq.m': 'header label', });
lyr_2055m_10.set('fieldLabels', {'Area sq.m': 'header label', });
lyr_2050m_11.set('fieldLabels', {'Area sq.m': 'header label', });
lyr_2045mSafeLvl_12.set('fieldLabels', {'Area sq.m': 'header label', });
lyr_InundationBoundary_13.set('fieldLabels', {});
lyr_InundationBoundary_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});