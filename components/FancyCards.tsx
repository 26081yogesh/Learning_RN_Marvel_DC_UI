import React, {Image, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

function FancyCard(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>Information About Superheroes</Text>
      <View style={[styles.cards, styles.elevatedCards]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkjHUXDAFa0mnsNXg3U7HsQ68NfrBz7acvA&s',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>IronMan</Text>
          <Text style={styles.cardLabel}>Played by Robert Downey JR</Text>
          <Text style={styles.cardDesc}>
            Iron Man, aka Tony Stark, is a genius inventor and industrialist who
            fights crime in a high-tech suit of armor. Iron Man's complexity
            includes themes of technology, power, and redemption, making him a
            modern pop culture icon.
          </Text>
          <Text style={styles.cardFooter}>Marvel</Text>
        </View>
      </View>
      <View style={[styles.cards, styles.elevatedCards]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBvGD92Gl9KecxJjiSfmR_yYKI1BCwmZECgQ&s',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Black Widow</Text>
          <Text style={styles.cardLabel}>Played by Scarlett Johannson</Text>
          <Text style={styles.cardDesc}>
            Black Widow, aka Natasha Romanoff, is a skilled spy and assassin in
            Marvel Comics. A former Russian agent, she joins the Avengers, using
            her agility, intelligence, and combat prowess to fight evil.
          </Text>
          <Text style={styles.cardFooter}>Marvel</Text>
        </View>
      </View>
      <View style={[styles.cards, styles.elevatedCards]}>
        <Image
          source={{
            uri: 'https://media.newyorker.com/photos/5909527c1c7a8e33fb38a864/master/pass/Man_of_Steel-580.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>SuperMan</Text>
          <Text style={styles.cardLabel}>Played by Henry Cavill</Text>
          <Text style={styles.cardDesc}>
            Superman, aka Clark Kent/Kal-El, is a powerful superhero from DC
            Comics. An alien from Krypton, he possesses superhuman abilities,
            including strength, flight, and invulnerability, and fights for
            truth and justice on Earth.
          </Text>
          <Text style={styles.cardFooter}>DC</Text>
        </View>
      </View>
      <View style={[styles.cards, styles.elevatedCards]}>
        <Image
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:1200/1*Q7hKwiODqJPPZ1TnkhfcQw.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Scarlett Witch</Text>
          <Text style={styles.cardLabel}>Played by Elizabeth olsen</Text>
          <Text style={styles.cardDesc}>
            Scarlet Witch, aka Wanda Maximoff, is a powerful Marvel superhero
            with reality-warping abilities. Initially a villain, she joins the
            Avengers, using her magic to protect humanity and fight against evil
            forces.
          </Text>
          <Text style={styles.cardFooter}>Marvel</Text>
        </View>
      </View>
      <View style={[styles.cards, styles.elevatedCards]}>
        <Image
          source={{
            uri: 'https://c.ndtvimg.com/2018-12/stins2so_aquaman-instagram_625x300_14_December_18.jpg?im=Resize=(1230,900)',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>AquaMan</Text>
          <Text style={styles.cardLabel}>Played by Jason Mamoa</Text>
          <Text style={styles.cardDesc}>
            Aquaman, aka Arthur Curry, is a DC Comics superhero and ruler of
            Atlantis. With abilities to communicate with marine life, superhuman
            strength, and underwater prowess, he protects both the ocean and the
            surface world.
          </Text>
          <Text style={styles.cardFooter}>DC</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    color: '#fff',
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
  cardImage: {
    height: 180,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {color: '#000', fontSize: 22, fontWeight: 'bold', marginBottom: 4},
  cardLabel: {color: '#000', fontSize: 16, marginBottom: 12},
  cardDesc: {color: '#000', marginBottom: 15},
  cardFooter: {color: '#000'},
});
export default FancyCard;
