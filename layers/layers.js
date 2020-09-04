var wms_layers = [];

var format_Neighbourhoods_0 = new ol.format.GeoJSON();
var features_Neighbourhoods_0 = format_Neighbourhoods_0.readFeatures(json_Neighbourhoods_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neighbourhoods_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neighbourhoods_0.addFeatures(features_Neighbourhoods_0);
var lyr_Neighbourhoods_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Neighbourhoods_0, 
                style: style_Neighbourhoods_0,
                interactive: true,
                title: '<img src="styles/legend/Neighbourhoods_0.png" /> Neighbourhoods'
            });
var format_neighbourhood_geoms_1 = new ol.format.GeoJSON();
var features_neighbourhood_geoms_1 = format_neighbourhood_geoms_1.readFeatures(json_neighbourhood_geoms_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_neighbourhood_geoms_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_neighbourhood_geoms_1.addFeatures(features_neighbourhood_geoms_1);
var lyr_neighbourhood_geoms_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_neighbourhood_geoms_1, 
                style: style_neighbourhood_geoms_1,
                interactive: true,
                title: '<img src="styles/legend/neighbourhood_geoms_1.png" /> neighbourhood_geoms'
            });
var format_SCHOOL_TDSB_UTM_2 = new ol.format.GeoJSON();
var features_SCHOOL_TDSB_UTM_2 = format_SCHOOL_TDSB_UTM_2.readFeatures(json_SCHOOL_TDSB_UTM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCHOOL_TDSB_UTM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHOOL_TDSB_UTM_2.addFeatures(features_SCHOOL_TDSB_UTM_2);
var lyr_SCHOOL_TDSB_UTM_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SCHOOL_TDSB_UTM_2, 
                style: style_SCHOOL_TDSB_UTM_2,
                interactive: true,
                title: '<img src="styles/legend/SCHOOL_TDSB_UTM_2.png" /> SCHOOL_TDSB_UTM'
            });
var format_TCDSBSchools_3 = new ol.format.GeoJSON();
var features_TCDSBSchools_3 = format_TCDSBSchools_3.readFeatures(json_TCDSBSchools_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCDSBSchools_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCDSBSchools_3.addFeatures(features_TCDSBSchools_3);
var lyr_TCDSBSchools_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TCDSBSchools_3, 
                style: style_TCDSBSchools_3,
                interactive: true,
                title: '<img src="styles/legend/TCDSBSchools_3.png" /> TCDSB - Schools'
            });

lyr_Neighbourhoods_0.setVisible(true);lyr_neighbourhood_geoms_1.setVisible(true);lyr_SCHOOL_TDSB_UTM_2.setVisible(true);lyr_TCDSBSchools_3.setVisible(true);
var layersList = [lyr_Neighbourhoods_0,lyr_neighbourhood_geoms_1,lyr_SCHOOL_TDSB_UTM_2,lyr_TCDSBSchools_3];
lyr_Neighbourhoods_0.set('fieldAliases', {'FIELD_1': 'FIELD_1', 'FIELD_2': 'FIELD_2', 'FIELD_3': 'FIELD_3', 'FIELD_4': 'FIELD_4', 'FIELD_5': 'FIELD_5', 'FIELD_6': 'FIELD_6', 'FIELD_7': 'FIELD_7', 'FIELD_8': 'FIELD_8', 'FIELD_9': 'FIELD_9', 'FIELD_10': 'FIELD_10', 'FIELD_11': 'FIELD_11', 'FIELD_12': 'FIELD_12', 'FIELD_13': 'FIELD_13', 'FIELD_14': 'FIELD_14', 'FIELD_15': 'FIELD_15', });
lyr_neighbourhood_geoms_1.set('fieldAliases', {'fid': 'fid', 'FIELD_1': 'FIELD_1', 'FIELD_2': 'FIELD_2', 'FIELD_3': 'FIELD_3', 'FIELD_4': 'FIELD_4', 'FIELD_5': 'FIELD_5', 'FIELD_6': 'FIELD_6', 'FIELD_7': 'FIELD_7', 'FIELD_8': 'FIELD_8', 'FIELD_9': 'FIELD_9', 'FIELD_10': 'FIELD_10', 'FIELD_11': 'FIELD_11', 'FIELD_12': 'FIELD_12', 'FIELD_13': 'FIELD_13', 'FIELD_14': 'FIELD_14', 'FIELD_15': 'FIELD_15', 'area': 'area', 'perimeter': 'perimeter', });
lyr_SCHOOL_TDSB_UTM_2.set('fieldAliases', {'SCHNAME': 'SCHNAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'POSTALCODE': 'POSTALCODE', 'METPANELID': 'METPANELID', 'ADD_PT_ID': 'ADD_PT_ID', 'MUN': 'MUN', 'X': 'X', 'Y': 'Y', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_TCDSBSchools_3.set('fieldAliases', {'FIELD_1': 'FIELD_1', 'FIELD_2': 'FIELD_2', 'FIELD_3': 'FIELD_3', 'FIELD_4': 'FIELD_4', 'FIELD_5': 'FIELD_5', 'FIELD_6': 'FIELD_6', 'FIELD_7': 'FIELD_7', 'FIELD_8': 'FIELD_8', 'FIELD_9': 'FIELD_9', });
lyr_Neighbourhoods_0.set('fieldImages', {'FIELD_1': 'TextEdit', 'FIELD_2': 'TextEdit', 'FIELD_3': 'TextEdit', 'FIELD_4': 'TextEdit', 'FIELD_5': 'TextEdit', 'FIELD_6': 'TextEdit', 'FIELD_7': 'TextEdit', 'FIELD_8': 'TextEdit', 'FIELD_9': 'TextEdit', 'FIELD_10': 'TextEdit', 'FIELD_11': 'TextEdit', 'FIELD_12': 'TextEdit', 'FIELD_13': 'TextEdit', 'FIELD_14': 'TextEdit', 'FIELD_15': 'TextEdit', });
lyr_neighbourhood_geoms_1.set('fieldImages', {'fid': '', 'FIELD_1': '', 'FIELD_2': '', 'FIELD_3': '', 'FIELD_4': '', 'FIELD_5': '', 'FIELD_6': '', 'FIELD_7': '', 'FIELD_8': '', 'FIELD_9': '', 'FIELD_10': '', 'FIELD_11': '', 'FIELD_12': '', 'FIELD_13': '', 'FIELD_14': '', 'FIELD_15': '', 'area': '', 'perimeter': '', });
lyr_SCHOOL_TDSB_UTM_2.set('fieldImages', {'SCHNAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'POSTALCODE': 'TextEdit', 'METPANELID': 'TextEdit', 'ADD_PT_ID': 'TextEdit', 'MUN': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_TCDSBSchools_3.set('fieldImages', {'FIELD_1': '', 'FIELD_2': '', 'FIELD_3': '', 'FIELD_4': '', 'FIELD_5': '', 'FIELD_6': '', 'FIELD_7': '', 'FIELD_8': '', 'FIELD_9': '', });
lyr_Neighbourhoods_0.set('fieldLabels', {'FIELD_1': 'no label', 'FIELD_2': 'no label', 'FIELD_3': 'inline label', 'FIELD_4': 'no label', 'FIELD_5': 'no label', 'FIELD_6': 'no label', 'FIELD_7': 'no label', 'FIELD_8': 'no label', 'FIELD_9': 'no label', 'FIELD_10': 'no label', 'FIELD_11': 'no label', 'FIELD_12': 'no label', 'FIELD_13': 'no label', 'FIELD_14': 'no label', 'FIELD_15': 'no label', });
lyr_neighbourhood_geoms_1.set('fieldLabels', {'fid': 'no label', 'FIELD_1': 'no label', 'FIELD_2': 'no label', 'FIELD_3': 'no label', 'FIELD_4': 'no label', 'FIELD_5': 'no label', 'FIELD_6': 'no label', 'FIELD_7': 'no label', 'FIELD_8': 'no label', 'FIELD_9': 'no label', 'FIELD_10': 'no label', 'FIELD_11': 'no label', 'FIELD_12': 'no label', 'FIELD_13': 'no label', 'FIELD_14': 'no label', 'FIELD_15': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_SCHOOL_TDSB_UTM_2.set('fieldLabels', {'SCHNAME': 'inline label', 'ADDRESS': 'no label', 'CITY': 'no label', 'POSTALCODE': 'no label', 'METPANELID': 'no label', 'ADD_PT_ID': 'no label', 'MUN': 'no label', 'X': 'no label', 'Y': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', });
lyr_TCDSBSchools_3.set('fieldLabels', {'FIELD_1': 'no label', 'FIELD_2': 'no label', 'FIELD_3': 'no label', 'FIELD_4': 'no label', 'FIELD_5': 'no label', 'FIELD_6': 'no label', 'FIELD_7': 'no label', 'FIELD_8': 'no label', 'FIELD_9': 'no label', });
lyr_TCDSBSchools_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});