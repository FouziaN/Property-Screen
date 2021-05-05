import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: '2 Kitchen',
          image: require('./src/img/chef.png'),
          color: '#AA98EA',
        },
        {
          name: '3 Rooms',
          image: require('./src/img/office.png'),
          color: '#F59BE4',
        },
        {
          name: ' 5 Bedrooms',
          image: require('./src/img/bed.png'),
          color: '#F07470',
        },
        {
          name: '2 M. Bedrooms',
          image: require('./src/img/single-bed.png'),
          color: '#FDC756',
        },
        {
          name: '4 Bathrooms',
          image: require('./src/img/bathtub.png'),
          color: '#87cefa',
        },
        {
          name: 'Garden',
          image: require('./src/img/gardening.png'),
          color: '#99edc3',
        },
        {
          name: '2 Dishwasher',
          image: require('./src/img/dishwasher.png'),
          color: '#D687FF',
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.HeaderShadow}>
          <View style={styles.Header}>
            <Image
              style={styles.backArr}
              source={require('./src/img/left-arrow.png')}
            />
            <Text style={styles.HeaderText}>PACI AK00123456789</Text>
            <Text style={styles.FollowText}>Follow</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.Layout}>
            <View>
              <ImageBackground
                style={styles.ImageBack}
                imageStyle={{borderRadius: 15}}
                source={require('./src/img/House.jpeg')}>
                <View style={styles.TextLayout2}>
                  <Text style={styles.NumText}>2/20</Text>
                </View>
                <View style={styles.TextLayout1}>
                  <Text style={styles.UploadedText}>
                    {' '}
                    UPLOADED BY PROPERTY MANAGMENT{' '}
                  </Text>
                </View>
              </ImageBackground>
            </View>

            {/* Second Section */}
            <View style={styles.ViewBorder}>
              <View style={styles.Layout1}>
                <Text style={styles.PriceText}>400 - 1,000 KD</Text>
                <Text>
                  Available Units from{' '}
                  <Text style={styles.priceKD}>500 KD</Text>
                </Text>
              </View>
              <View style={{marginLeft: 25}}>
                <Image
                  style={styles.Icon}
                  source={require('./src/img/apartment.png')}
                />
                <Text style={styles.IconText}>Apartments</Text>
              </View>
              <View>
                <Image
                  style={styles.Icon2}
                  source={require('./src/img/gallery.png')}
                />
                <Text style={styles.IconText}>Gallery</Text>
              </View>
            </View>
            <View style={styles.line} />
            {/* Third Section */}
            <View style={styles.ViewBorder}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.AddressName}>Boudl Kuwait</Text>
                  <Text style={styles.ApartmentLeft}>(1 Apartment Left)</Text>
                  <View style={styles.circle2}>
                    <Image
                      style={{...styles.NavIcon, height: 20, width: 20}}
                      source={require('./src/img/qr-code.png')}
                    />
                  </View>
                </View>
                <Text style={styles.Add}>
                  4/25 Fahd Al Salem St {'\n'} Hawally , Kuwait
                </Text>
              </View>
              <View>
                <Image
                  style={styles.NavIcon}
                  source={require('./src/img/Nav.png')}
                />
                <Text>4 Kms</Text>
              </View>
            </View>
            {/* Fourth Section */}
            <View style={styles.box}>
              <View style={styles.ViewBorder2}>
                <View>
                  <Text>
                    Landlord :{' '}
                    <Text style={styles.landlordName}>Akhbaar Khan</Text>{' '}
                  </Text>
                  <View style={styles.Layout2}>
                    <Image
                      style={styles.NavIcon}
                      source={require('./src/img/mobile.png')}></Image>
                    <Text style={styles.Add}>+ 965 - 99 42 618</Text>
                  </View>
                </View>
                <View>
                  <View style={styles.View1}>
                    <View style={styles.RatingValue}>
                      <Text>4.0</Text>
                      <Image
                        style={{...styles.NavIcon, height: 15, width: 15}}
                        source={require('./src/img/star.png')}
                      />
                    </View>
                    <Image
                      style={styles.NavIcon}
                      source={require('./src/img/chat.png')}
                    />
                  </View>
                  <Text style={styles.ViewText}>View Rating {'>'} </Text>
                </View>
              </View>
            </View>
            <Text style={styles.RatingText}>Rating & Reviews</Text>
            <View style={styles.box}>
              <View style={styles.ViewBorder2}>
                <View>
                  <Text style={styles.RatText}>
                    8.0{' '}
                    <Text style={{color: 'black'}}>
                      /10{' '}
                      <View style={styles.Excellent}>
                        <Text style={styles.ExcellentText}> Excellent</Text>
                      </View>
                    </Text>
                  </Text>
                  <Text style={styles.Add}>Based on 12 user rating</Text>
                </View>
                <View style={styles.RateNowView}>
                  <Text style={styles.RateNowText}>Rate Now</Text>
                </View>
              </View>
              <View style={{...styles.line, marginLeft: 10, width: 320}} />
              <View style={styles.ViewBorder2}>
                <View>
                  <Text style={styles.brokerName}>Abdulwahab</Text>
                  <Text style={styles.TimeDate}>15/02/2018; 14:52</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.ratingView}>
                    <Text style={styles.TextNum}>7.0</Text>
                  </View>
                  <View style={styles.ratingView2}>
                    <Text style={styles.TextNum2}>Very Good</Text>
                  </View>
                </View>
              </View>
              <Text style={{...styles.Layout3, marginLeft: 15}}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page.
              </Text>
              <View style={{...styles.line, marginLeft: 10, width: 320}} />
              <View style={styles.ViewBorder2}>
                <Text style={styles.ReviewText}>
                  Read All<Text style={styles.ReviewTextColor}> 12 Review</Text>
                </Text>
                <Image
                  style={styles.arrowIcon}
                  source={require('./src/img/right-arrow.png')}
                />
              </View>
            </View>
            <View>
              <Text style={styles.RatingText}>Description</Text>
              <Text style={styles.Layout3}>
                Boasting an array of sleek finishes and a thoughtful open plan
                layout, this immaculate 1-bedroom, 1-bathroom condo is a
                paradigm of contemporary Brooklyn living. Features of this 531
                sq. ft. home include wide plank engineered hardwood floors, huge
                Pella windows with western exposure, central heating and
                cooling, and a convenient washer/dryer hook-up.
              </Text>
            </View>
            <Text style={styles.RatingText}>Property Amenities</Text>
            <View style={styles.Layout2}>
              <View style={styles.circle}>
                <Image source={require('./src/img/swimmer.png')} />
              </View>
              <View style={styles.circle}>
                <Image source={require('./src/img/padlock.png')} />
              </View>
              <View style={styles.circle}>
                <Image source={require('./src/img/parking.png')} />
              </View>
              <Text style={styles.moreText}>+5 more</Text>
            </View>
            <View style={styles.Layout2}>
              <Text style={styles.Pool}>Pool</Text>
              <Text style={styles.security}>security</Text>
              <Text style={styles.Parking}>Parking</Text>
            </View>
            <Text style={styles.RatingText}> Apartment Amenities </Text>
            <View>
              <FlatList
                style={styles.listView}
                data={this.state.data}
                numColumns={2}
                renderItem={({item}) => {
                  return (
                    <View style={styles.IconList}>
                      <View
                        style={[
                          {padding: 8, borderRadius: 50},
                          {backgroundColor: item.color},
                        ]}>
                        <Image source={item.image} style={styles.IconImage} />
                      </View>
                      <Text style={styles.listName}>{item.name}</Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 40,
  },
  Layout: {
    marginLeft: 20,
    marginRight: 20,
  },
  backArr: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 5,
  },
  FollowText: {
    fontSize: 20,
    fontWeight: '500',
    marginRight: 10,
    marginTop: 5,
    color: '#0080ff',
  },
  ImageBack: {
    height: 240,
    width: 350,
    marginTop: 10,
  },
  TextLayout1: {
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    height: 50,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
  },
  UploadedText: {
    fontWeight: '700',
    color: 'white',
    marginLeft: 10,
  },
  TextLayout2: {
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
    height: 25,
    width: 50,
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NumText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '700',
  },
  PriceText: {
    fontWeight: '900',
    fontSize: 18,
    color: '#bf66ef',
  },
  priceKD: {
    fontWeight: '700',
  },
  Icon: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  Icon2: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconText: {
    fontSize: 11,
    marginTop: 5,
    marginLeft: 5,
  },
  line: {
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 1,
    width: 350,
    marginTop: 15,
  },
  NavIcon: {
    height: 25,
    width: 25,
  },
  ApartmentLeft: {
    fontSize: 10,
    color: 'red',
    marginLeft: 5,
    marginTop: 5,
  },
  AddressName: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: 5,
  },
  RatingText: {
    fontWeight: '700',
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
  },

  Add: {
    fontSize: 16,
    color: 'gray',
  },
  ViewBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  Layout1: {
    marginTop: 10,
  },
  landlordName: {
    fontWeight: '800',
    fontSize: 16,
  },
  Layout2: {
    flexDirection: 'row',
    marginTop: 12,
  },
  View1: {flexDirection: 'row'},
  RatingValue: {
    borderWidth: 0.5,
    height: 25,
    width: 50,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    marginRight: 10,
  },
  RatText: {
    color: '#0080ff',
    fontSize: 20,
    fontWeight: '500',
  },
  Excellent: {
    backgroundColor: '#99edc3',
    height: 25,
    width: 80,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ExcellentText: {
    color: 'green',
    fontWeight: '600',
  },
  RateNowView: {
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0080ff',
  },
  RateNowText: {
    color: '#0080ff',
    fontWeight: '700',
  },
  ratingView: {
    backgroundColor: '#4cbb17',
    height: 25,
    width: 35,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingView2: {
    backgroundColor: '#99edc3',
    height: 25,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  TextNum: {
    color: 'white',
  },
  TextNum2: {
    color: 'green',
  },
  Layout3: {
    marginTop: 15,
  },
  ReviewText: {
    fontSize: 15,
    fontWeight: '500',
  },
  ReviewTextColor: {
    color: '#0080ff',
  },
  arrowIcon: {
    height: 18,
    width: 18,
  },
  brokerName: {
    fontWeight: '700',
    fontSize: 16,
  },
  TimeDate: {
    color: 'gray',
    fontSize: 12,
  },
  box: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 15,
  },
  ViewBorder2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  circle: {
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  Pool: {
    marginLeft: 20,
    fontSize: 12,
  },
  security: {
    marginLeft: 30,
    fontSize: 12,
  },
  Parking: {
    marginLeft: 28,
    fontSize: 12,
  },
  circle2: {
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  moreText: {
    color: '#0080ff',
    alignSelf: 'center',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewText: {
    color: '#0080ff',
    marginTop: 20,
  },
  HeaderShadow: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    height: 40,
  },
  IconList: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  IconImage: {
    width: 30,
    height: 30,
  },
  listName: {marginHorizontal: 5},
  listView : {marginTop: 10}
});
