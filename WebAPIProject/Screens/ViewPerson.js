import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import helper code
import Settings from '../constants/Settings';
import { RoiDeletePerson, RoiGetPerson } from './utils/Roiapi';
import { PopupOk, PopupOkCancel } from './utils/Popup';

// Import styling and components
import { TextParagraph, TextH1, TextH2, TextLabel } from '../components/StyledText';
import Styles from './Styles/MainStyle';
import { MyButton } from '../Components/MyButton';


export default function ViewPersonScreen(props) {
  // Set up a default Person object
  const personTemplate = {
    id: 0,
    name: '',
    phone: '',
    departmentId: null,
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    department: null,
  };

  // State - data for this component

  // Store a person in state
  const [person, setPerson] = React.useState(personTemplate);

  // Set "effect" to retrieve and store data - only run on mount/unmount (loaded/unloaded)
  // "effectful" code is something that triggers a UI re-render
  React.useEffect(refreshPerson, []);

  // Refresh the person data - call the API
  function refreshPerson() {
    // Get person ID passed to this screen (via props)
    const id = props.route.params.id;

    // Get data from the API
    RoiGetPerson(id)
      // Success
      .then((data) => {
        // Store results in state variable (if data returned)
        if (data) setPerson(data);
      })
      // Error
      .catch((error) => {
        // Display error
        PopupOk('API Error', 'Could not get person from the server');
        // OPTIONAL: navigate back to ViewPeople screen
        props.navigation.navigate('ViewPeople');
      });
  }

  function showEditPerson() {
    props.navigation.navigate("EditPerson", {id: person.id});
  }

  /**
   * Delete a person from the database
   */
  function deletePerson() {

    // Check if person should be deleted (confirm with user)
    PopupOkCancel(

      // Title and message
      'Delete person?',
      `Are you sure you want to delete ${person.name}`,

      // 0K - delete the person
      () => {

        // Delete the person using the API
        RoiDeletePerson(person.id)
          .then((data) => {
            // Show confirmation that the person has been deleted
            PopupOk('Person deleted', `${person.name} has been  deleted`);

            // Go back to the person list (ViewPeople)
            // props.navigation.navigate("ViewPeople");
            props.navigation.replace("Root", {screen: "People"});
          })
          .catch((error) => {
            // Display error
            PopupOk('API Error', 'Could not delete person');
          });
        // console.log('Ok.. deleting person');
      },
      // Cancel do nothing
      () => {
        console.log('Cancel - no delete for you!');
      }
    );
  }

  // Main output of the screen component
  // Main output of the screen component
return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
        <TextH1 style={{ marginTop: 0 }}>Person: {person.name}</TextH1>
  
        <View style={Styles.form}>
          <View style={Styles.fieldSet}>
            <TextParagraph style={Styles.legend}>Details</TextParagraph>
  
            {/* Add Name, Phone here */}
  
            <View style={Styles.formRow}>
              <TextLabel>Department:</TextLabel>
              <TextParagraph>{person.department ? person.department.name : '---'}</TextParagraph>
              {/* <TextParagraph>{person.department?.name ?? '<NONE>'}</TextParagraph> */}
            </View>
          </View>
  
          <View style={Styles.fieldSet}>
            <TextParagraph style={Styles.legend}>Address</TextParagraph>
  
            <View style={Styles.formRow}>
              <TextLabel>Street:</TextLabel>
              <TextParagraph>{person.street}</TextParagraph>
            </View>
  
            {/* Add City, State, Zip, Country here */}
          </View>
        </View>
  
        <View style={[Styles.personButtonContainer, { borderBottomWidth: 0 }]}>
          <MyButton
            text="Edit"
            type="major" // default*|major|minor
            size="medium" // small|medium*|large
            onPress={showEditPerson}
          />
          <MyButton
            text="Delete"
            type="default" // default*|major|minor
            size="medium" // small|medium*|large
            onPress={deletePerson}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}