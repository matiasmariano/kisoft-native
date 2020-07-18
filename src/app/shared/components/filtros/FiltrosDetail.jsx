import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwasome from 'react-native-vector-icons/FontAwesome5';
import { List } from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const FiltrosDetail = ({ handlerUpdate, setIsModalVisible }) => {

    const [expanderList, setExpanded] = useState([
            { field: 'puntos', expanded: false},
            { field: 'categoria', expanded: false},
            { field: 'ubicacion', expanded: false},
            { field: 'ocacion', expanded: false},
            { field: 'paraQuienEs', expanded: false},
            { field: 'busquedaPersonalizada', expanded: false},
            { field: 'tipoDeExperiencia', expanded: false},
    ]);

    const [parametrosFiltro, setParametrosFiltro] = useState({

    })

    const onUpdate = () => {
        //go API...
        handlerUpdate({})
    }

    const handlePress = (expander) => {
        let previousValue = expanderList.filter(exp => { return exp.field === expander})[0].expanded;
        let newList = expanderList.filter(exp => { return exp.field !== expander}).map(expanderForCollapse => { return {field: expanderForCollapse.field, expanded: false} });
        newList.push({field: expander, expanded: !previousValue});
        setExpanded(newList)
    };

    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.filtroText}>Filtro</Text>
                    <IconAwasome
                        name="times"
                        color="#ffffff"
                        style={{marginRight: 33, marginTop: 30, marginBottom: 21, fontSize: 25}}
                        onPress={() => { setIsModalVisible(false) }}
                    />
                </View>
            </View>
            <View style={styles.body}>
                <List.Section>
                    <List.Accordion
                        title="Puntos"
                        expanded={expanderList.filter(expander => { return expander.field === 'puntos'})[0].expanded}
                        onPress={() => handlePress('puntos')}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title=""
                                   left={props =>
                                    <View>
                                        <MultiSlider values={[0, 250]}
                                                     unselectedStyle={{ height: 2, backgroundColor: '#686868' }}
                                                     selectedStyle={{ backgroundColor: '#E43B52', height: 2 }}
                                                     sliderLength={310}
                                                     containerStyle={{ marginLeft: '12%' }}
                                                     customMarker={() => <View style={styles.customMarkerStyle}></View>}/>
                                        <Text style={styles.sliderValues}>{1500} - {25000}</Text>
                                    </View>
                                   }/>
                    </List.Accordion>

                    <List.Accordion
                        title="Categoria"
                        expanded={expanderList.filter(expander => { return expander.field === 'categoria'})[0].expanded}
                        onPress={() => handlePress('categoria')}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Ubicacion"
                        expanded={expanderList.filter(expander => { return expander.field === 'ubicacion'})[0].expanded}
                        onPress={handlePress}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Ocacion"
                        expanded={expanderList.filter(expander => { return expander.field === 'ocacion'})[0].expanded}
                        onPress={handlePress}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Para quien es"
                        expanded={expanderList.filter(expander => { return expander.field === 'paraQuienEs'})[0].expanded}
                        onPress={handlePress}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Busqueda personalizada"
                        expanded={expanderList.filter(expander => { return expander.field === 'busquedaPersonalizada'})[0].expanded}
                        onPress={handlePress}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Tipo de experiencia"
                        expanded={expanderList.filter(expander => { return expander.field === 'tipoDeExperiencia'})[0].expanded}
                        onPress={handlePress}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>


                </List.Section>
            </View>
        </>
    )
}

export default FiltrosDetail

const styles = {
    header: {
        height: 83,
        backgroundColor: 'rgb(228, 32, 40)',
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
    filtroText: {
        color: 'white',
        fontSize: 30,
        marginTop: 21,
        marginBottom: 21,
        marginLeft: 18,
    },
    body: {

    },
    accordionContainer: {
        height: 68,
        backgroundColor: '#FFFFFF',
        marginTop: 5
    },
    accordionTitle: {
        fontSize: 19,
        color: '#464646',
        height: 30
    },
    customMarkerStyle: {
        width: 17,
        height: 17,
        backgroundColor: '#E43B52',
        borderRadius: 13
    },
    sliderValues: {
        fontSize: 16,
        color: '#464646'
    }
}