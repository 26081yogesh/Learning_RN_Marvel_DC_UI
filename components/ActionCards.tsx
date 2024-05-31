import React, {
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {View, Text} from 'react-native';

function ActionCard(): JSX.Element {
  function goToWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View style={[styles.cards, styles.elevatedCards]}>
      <View style={styles.mdImage}>
        <TouchableOpacity
          onPress={() => goToWebsite('https://www.marvel.com/')}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKstoa1tZRpo9vmz7FrcdkfOwDfhBcDw2bpQ&s',
            }}
            style={styles.cardImage}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToWebsite('https://www.dc.com/')}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQLpKhxEv9y5yK-9LqnV821pD21E-5eqogJg&s',
            }}
            style={styles.cardImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>
          Marvel and DC Studios are the leading creators of superhero films and
          TV shows. Marvel, known for the Marvel Cinematic Universe, features
          characters like Iron Man and Spider-Man. DC, with Batman and Superman,
          drives the DC Extended Universe.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  cardImage: {
    height: 150,
    width: 150,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  mdImage: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cards: {
    height: 390,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 8,
    backgroundColor: '#fff',
  },
  elevatedCards: {
    elevation: 5,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
});

export default ActionCard;
