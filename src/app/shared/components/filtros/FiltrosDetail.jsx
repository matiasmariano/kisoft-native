import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwasome from 'react-native-vector-icons/FontAwesome5';
import { List } from 'react-native-paper';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { get } from '../../../modules/experiencias/categorias/services/CategoriasServices';

const FiltrosDetail = ({ handlerUpdate, setIsModalVisible }) => {

    const [expanderList, setExpanded] = useState([
        { field: 'puntos', expanded: false },
        { field: 'categoria', expanded: false },
        { field: 'ubicacion', expanded: false },
        { field: 'ocacion', expanded: false },
        { field: 'paraQuienEs', expanded: false },
        { field: 'busquedaPersonalizada', expanded: false },
        { field: 'tipoDeExperiencia', expanded: false },
    ]);

    const [parametrosFiltro, setParametrosFiltro] = useState({})

    useEffect(() => {
        const call = async () => {
            let cs = []
            let categorias = await get()
            if (categorias.okResponse) {
                categorias.data.forEach(c => {
                    cs.push( { name: c.name, selected: false })
                });

                setParametrosFiltro({
                    Categorias: cs
                })
            }
        }
        call()
    }, [])

    const onUpdate = () => {
        //go API...
        handlerUpdate({})
    }

    const handlePress = (expander) => {
        let previousValue = expanderList.filter(exp => { return exp.field === expander })[0].expanded;
        let newList = expanderList.filter(exp => { return exp.field !== expander }).map(expanderForCollapse => { return { field: expanderForCollapse.field, expanded: false } });
        newList.push({ field: expander, expanded: !previousValue });
        setExpanded(newList)
    };

    const handleFilterElementSelection = (filterName, elementName, value) => {
        let state = parametrosFiltro;
        let index = -1;

        state[filterName].forEach((element, i) => {
            if (element.name == elementName)
                index = i;
        });

        state[filterName][index].selected = value;
        setParametrosFiltro({ ...state });
    }

    let categorias = ['Gastronomia', 'Aventura', 'Bienestar', 'Escapadas', 'Espectaculos', 'Familia', 'Variedades', 'Giftcard'].map(item => {
        let itemSelected = parametrosFiltro['Categorias'].filter(categoria => { return categoria.name === item })[0].selected;

        return (
            <View key={item} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{item}</Text>
                <TouchableOpacity style={itemSelected ? styles.outer : {}}>
                    <TouchableOpacity style={itemSelected ? styles.checkedCircle : styles.circle} onPress={() => { handleFilterElementSelection('Categorias', item, !itemSelected) }} />
                </TouchableOpacity>
            </View>
        )
    });

    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.filtroText}>Filtro</Text>
                    <IconAwasome
                        name="times"
                        color="#ffffff"
                        style={{ marginRight: 33, marginTop: 30, marginBottom: 21, fontSize: 25 }}
                        onPress={() => { setIsModalVisible(false) }}
                    />
                </View>
            </View>
            <View style={styles.body}>
                <List.Section>
                    <List.Accordion
                        title="Puntos"
                        expanded={expanderList.filter(expander => { return expander.field === 'puntos' })[0].expanded}
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
                                        customMarker={() => <View style={styles.customMarkerStyle}></View>} />
                                    <Text style={styles.sliderValues}><Text>{1500}</Text> - <Text>{25000}</Text></Text>
                                </View>
                            } />
                    </List.Accordion>

                    <List.Accordion
                        title="Categoria"
                        expanded={expanderList.filter(expander => { return expander.field === 'categoria' })[0].expanded}
                        onPress={() => handlePress('categoria')}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title=""
                            left={props =>
                                <View style={{ width: '100%' }}>
                                    {categorias}
                                </View>
                            } />
                    </List.Accordion>

                    <List.Accordion
                        title="Ubicacion"
                        expanded={expanderList.filter(expander => { return expander.field === 'ubicacion' })[0].expanded}
                        onPress={handlePress}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Ocacion"
                        expanded={expanderList.filter(expander => { return expander.field === 'ocacion' })[0].expanded}
                        onPress={handlePress}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Para quien es"
                        expanded={expanderList.filter(expander => { return expander.field === 'paraQuienEs' })[0].expanded}
                        onPress={handlePress}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Busqueda personalizada"
                        expanded={expanderList.filter(expander => { return expander.field === 'busquedaPersonalizada' })[0].expanded}
                        onPress={handlePress}
                        style={styles.accordionContainer}
                        titleStyle={styles.accordionTitle}>
                        <List.Item title="First item" />
                        <List.Item title="Second item" />
                    </List.Accordion>

                    <List.Accordion
                        title="Tipo de experiencia"
                        expanded={expanderList.filter(expander => { return expander.field === 'tipoDeExperiencia' })[0].expanded}
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
        color: '#464646',
        marginLeft: '40%',
        borderBottomColor: '#464646',
        borderBottomWidth: 2,
        flexDirection: "row",
        alignSelf: "flex-start",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        height: 55,
        backgroundColor: '#F9F9F9',
        width: '100%',
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 25
    },
    checkedCircle: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#EE4148',
        marginRight: 25,
    },
    buttonText: {
        marginLeft: 18,
        fontSize: 16,
        color: '#464646'
    },
    outer: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        width: 25,
        height: 25,
        borderColor: '#EE4148',
        borderWidth: 3,
        borderRadius: 12,
        marginRight: 25
    }
}