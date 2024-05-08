var wms_layers = [];

var format_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0 = new ol.format.GeoJSON();
var features_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0 = format_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0.readFeatures(json_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0.addFeatures(features_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0);
var lyr_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0, 
                style: style_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0,
                popuplayertitle: "99bfd9e7-bb42-4728-87b5-07f8c8ac631c2020328-1-1vef4ev.lu5nk",
                interactive: true,
                title: '<img src="styles/legend/99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0.png" /> 99bfd9e7-bb42-4728-87b5-07f8c8ac631c2020328-1-1vef4ev.lu5nk'
            });
var format_World_Cities_1 = new ol.format.GeoJSON();
var features_World_Cities_1 = format_World_Cities_1.readFeatures(json_World_Cities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_World_Cities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_World_Cities_1.addFeatures(features_World_Cities_1);
var lyr_World_Cities_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_World_Cities_1, 
                style: style_World_Cities_1,
                popuplayertitle: "World_Cities",
                interactive: true,
                title: '<img src="styles/legend/World_Cities_1.png" /> World_Cities'
            });

lyr_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0.setVisible(true);lyr_World_Cities_1.setVisible(true);
var layersList = [lyr_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0,lyr_World_Cities_1];
lyr_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CNTRY_NAME': 'CNTRY_NAME', });
lyr_World_Cities_1.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'CITY_NAME': 'CITY_NAME', 'GMI_ADMIN': 'GMI_ADMIN', 'ADMIN_NAME': 'ADMIN_NAME', 'FIPS_CNTRY': 'FIPS_CNTRY', 'CNTRY_NAME': 'CNTRY_NAME', 'STATUS': 'STATUS', 'POP': 'POP', 'POP_RANK': 'POP_RANK', 'POP_CLASS': 'POP_CLASS', 'PORT_ID': 'PORT_ID', 'LABEL_FLAG': 'LABEL_FLAG', 'POP_SOURCE': 'POP_SOURCE', });
lyr_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0.set('fieldImages', {'OBJECTID': '', 'CNTRY_NAME': '', });
lyr_World_Cities_1.set('fieldImages', {'FID': '', 'OBJECTID': '', 'CITY_NAME': '', 'GMI_ADMIN': '', 'ADMIN_NAME': '', 'FIPS_CNTRY': '', 'CNTRY_NAME': '', 'STATUS': '', 'POP': '', 'POP_RANK': '', 'POP_CLASS': '', 'PORT_ID': '', 'LABEL_FLAG': '', 'POP_SOURCE': '', });
lyr_99bfd9e7bb42472887b507f8c8ac631c202032811vef4evlu5nk_0.set('fieldLabels', {'OBJECTID': 'no label', 'CNTRY_NAME': 'no label', });
lyr_World_Cities_1.set('fieldLabels', {'FID': 'no label', 'OBJECTID': 'no label', 'CITY_NAME': 'no label', 'GMI_ADMIN': 'no label', 'ADMIN_NAME': 'no label', 'FIPS_CNTRY': 'no label', 'CNTRY_NAME': 'no label', 'STATUS': 'no label', 'POP': 'no label', 'POP_RANK': 'no label', 'POP_CLASS': 'no label', 'PORT_ID': 'no label', 'LABEL_FLAG': 'no label', 'POP_SOURCE': 'no label', });
lyr_World_Cities_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});