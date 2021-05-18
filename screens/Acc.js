import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export default class Acc extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

//   setSections = (sections) => {
//     this.setState({
//       activeSections: sections.includes(undefined) ? [] : sections,
//     });
//   };

//   renderHeader = (section, _, isActive) => {
//     return (
//       <Animatable.View
//         duration={400}
//         style={[styles.header, isActive ? styles.active : styles.inactive]}
//         transition="backgroundColor"
//       >
//         <Text style={styles.headerText}>{section.title}</Text>
//       </Animatable.View>
//     );
//   };

//   renderContent(section, _, isActive) {
//     return (
//       <Animatable.View
//         duration={400}
//         style={[styles.content, isActive ? styles.active : styles.inactive]}
//         transition="backgroundColor"
//       >
//         <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
//           {section.content}
//         </Animatable.Text>
//       </Animatable.View>
//     );
//   }

  render() {

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons style={{marginHorizontal:15}} name="local-attraction" size={30} color="black" />
        <Text style={styles.title}>Report Details</Text>
        </View>
        
          
           {/* <View style={styles.multipleToggle}>
            <Text style={styles.multipleToggle__title}>Multiple Select?</Text>
            <Switch
              value={multipleSelect}
              onValueChange={(a) => this.setState({ multipleSelect: a })}
            />
          </View>

          <View style={styles.selectors}>
            <Text style={styles.selectTitle}>Select:</Text>

            {SELECTORS.map((selector) => (
              <TouchableOpacity
                key={selector.title}
                onPress={() => this.setSections([selector.value])}
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }
                  >
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View> */}

          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>First Report</Text>
              <AntDesign style={{padding:15,marginHorizontal:120}}name="downcircle" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
              
              <Image style={{width:'100%',height:200,marginTop:10}} source={{
                uri: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'

              }}/>
            </View>
          </Collapsible>
          {/* <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            renderAsFlatList={false}
          /> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:-120,
    justifyContent:'flex-start'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  header: {
    padding: 10,
    flexDirection:'row'
  },
  headerText: {
    marginTop:15,
    marginHorizontal:30,
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    marginBottom:8,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});