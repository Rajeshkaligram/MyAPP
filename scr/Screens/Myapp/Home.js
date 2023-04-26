import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {useEffect} from 'react';
import {AuthContext} from '../../Context/AuthContext';

const Home = () => {
  const [getData, setGetData] = useState('');
  const {LogOut} = useContext(AuthContext);
  const {UserToken} = useContext(AuthContext);

  useEffect(() => {
    FetchData();
  }, [UserToken]);

  const FetchData = async () => {
    fetch('https://admin-befit.dedicateddevelopers.us/api/challenge/list', {
      method: 'GET',
      headers: {
        token: `${UserToken}`,
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        setGetData(responseJson.data);
        console.log(responseJson);
      })
      .catch(error => {
        alert(error);
      });
  };

  // if (getData._id === getData._id) {
  //   handleClick(getData);
  // }
  const handleClick = (_id, workout_id) => {
    if (getData.map(item => item._id === _id)) {
      fetch(
        'https://admin-befit.dedicateddevelopers.us/api/user-challenge/save',
        {
          method: 'POST',
          headers: {
            token: `${UserToken}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            challenge_id: _id,
            workout_id: workout_id,
            rep_no: 0,
            set_no: 0,
            duration: 0,
          }),
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          alert(responseJson.message);
          console.log(responseJson);
        })
        .catch(error => {
          alert(error);
        });
    } else {
      alert('Error');
    }
  };
  return (
    <ImageBackground
      style={styles.main}
      source={require('../../assets/backImg.jpg')}>
      <SafeAreaView style={styles.body}>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={styles.text}>HOME</Text>

          <View>
            <FlatList
              data={getData}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => handleClick(item._id, item.workout_id)}>
                  <View style={styles.render_body}>
                    <Text style={styles.render_text}>
                      {`Title: ` + item.title}
                    </Text>
                    <Text style={styles.workout}>
                      {`WorKout Id: ` + item.workout_id}
                    </Text>
                    <Text style={styles.workout}>
                      {`Active Duration: ` + item.active_duration}
                    </Text>
                    <Text style={styles.workout}>
                      {`Workout Duration: ` + item.workout_duration}
                    </Text>
                    <Image source={{uri: item.image}} />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            width: Dimensions.get('screen').width,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            marginTop: 80,
            borderRadius: 20,
          }}>
          <TouchableOpacity onPress={() => LogOut()}>
            <Text style={styles.text2}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    marginBottom: 50,
    marginTop: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text2: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  render_body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 360,
    backgroundColor: '#000000',
    opacity: 0.7,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  render_text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  workout: {
    color: 'yellow',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
