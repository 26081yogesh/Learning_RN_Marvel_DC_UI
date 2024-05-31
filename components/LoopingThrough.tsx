import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

const LoopingThrough = () => {
  const arrayOfSuperheroesImages = [
    'https://cdn.wccftech.com/wp-content/uploads/2022/10/WCCFironmanea1.jpg',
    'https://images.immediate.co.uk/production/volatile/sites/3/2022/12/MCDBAVVEC017-d4ece24.jpg?quality=90&resize=980,654',
    'https://t4.ftcdn.net/jpg/05/91/62/83/360_F_591628317_vOLlKB1C1zVzg3NqEO3rsx9d1p6eQuI3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6lNQ1hzWW1028XDPkHoRHGWCazyyZt3LKw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpNvgGCg2vx5xOKKVX_VunHyGLIbhSstPZQ&s',
    'https://assets.telegraphindia.com/telegraph/2023/Jun/1686956288_new-project-13.jpg',
    'https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg?resize=1088%2C612&crop_strategy=smart',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9-pUbANy8UKJBiEtK6RR68bl1wV7qzgkDg&s',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hulk_%282540708438%29.jpg/1200px-Hulk_%282540708438%29.jpg',
    'https://ew.com/thmb/AFTcIxfuJ7W28JV1IejfpAnepVA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/aquaman-1-2000-f68e1086c71c40ea8e2d1d9e75d1b147.jpg',
    'https://sm.ign.com/ign_in/news/b/black-pant/black-panther-2-production-pauses-just-as-it-restarts-due-to_hwzu.jpg',
  ];

  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        {arrayOfSuperheroesImages.map((img, index) => (
          <Image style={styles.image} key={index} source={{uri: img}} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'center',
    marginTop: 30,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginHorizontal: 5,
    resizeMode: 'cover',
    borderRadius: 100,
  },
});

export default LoopingThrough;
