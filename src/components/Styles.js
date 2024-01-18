import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#519032',
    padding:15,
    alignItems: 'center',
  },
  homeScrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerHomeContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#519032',
    padding:15,
    alignItems: 'center',
  },
  innerHomeScrollView: {
    flex: 1
  },
  homeButtonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 100,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 20,
    marginTop: 20,
    justifyContent: 'center',
    paddingVertical:10,
    paddingHorizontal: 10,
    width:'30%'
  },
  homeButtonTxtStyle: {
    color: '#FFFFFF',
    fontSize:17,
    textAlign:'center'
  },
  // Loader Component
   modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  // Login and Registration Page
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#519032',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 60,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 60,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 12,
    fontSize: 24,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
    fontSize: 20,
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});


const stylesSidebar = StyleSheet.create({
  
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#519032',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#519032',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});

export {stylesSidebar};