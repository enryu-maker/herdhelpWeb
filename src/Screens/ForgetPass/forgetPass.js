// import {
//   View,
//   Text,
//   TextInput,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
import React ,{ useState} from 'react';
// import {images, COLORS, SIZES, FONTS} from '../../Components/Constants';
// import Header from '../../Components/Header';
import utils from '../../utils/Utils';
// import FormInput from '../../Components/FormInput';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import TextButton from '../../Components/TextButton';
import axios from 'axios';
import {baseURL} from '../../helpers/helpers';
// import {ActivityIndicator} from 'react-native-paper';
// import {showMessage} from 'react-native-flash-message';
// 
export default function forgetPass({navigation}) {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passErr, setPassErr] = useState('');
  const [passErr2, setPassErr2] = useState('');
  const [loading, setLoading] = useState(false);
  const [showB1, setShowB1] = useState(true);
  const [showB2, setShowB2] = useState(true);
  const [isEmailvalid, setEmailisvalid] = useState(false);
  const [isTokenvalid, setTokeisvalid] = useState(false);
  const [EmailErr, setEmailErr] = useState('');
  const [tokenErr, settokenErr] = useState('');
  const [showPass, setShowPass] = useState(false);


  function isEnableSignIn() {
    return email != '';
  }
  async function getToken() {
    setLoading(true);
    await axios
      .post(
        baseURL + '/reset-password',
        {
          email: email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => {
        if (response.status == 201) {
          setLoading(false);
          setEmailisvalid(true);
          setShowB1(false);
          setEmailErr(`OTP sent to ${email}`);
        } else {
          setLoading(false);
          setEmailErr('Email Not Registered');
          setShowB1(false);
        }
      })
      .catch(e => {
        setLoading(false);
        setEmailErr('Email Not Registered');
        setShowB1(false);
      });
  }
  async function setNewPass() {
    setLoading(true);
    await axios
      .post(
        baseURL + `/reset-password/submit?token=${token}`,
        {
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => {
        if (response.status == 200) {
          setLoading(false);
          showMessage({
            message:`Password Updated`,
            type: 'default',
            backgroundColor: COLORS.Primary,
            color: COLORS.white,
            titleStyle: {
              alignSelf: 'center',
              ...FONTS.h3,
            },
            animationDuration: 250,
            icon: 'success',
            style: {
              justifyContent: 'center',
            },
          });
        
        } else {
          setLoading(false);
          showMessage({
            message:`${response.data.msg}`,
            type:"danger",
            backgroundColor: COLORS.red,
            color: COLORS.white,
            titleStyle: {
              alignSelf: 'center',
              ...FONTS.h3,
            },
            animationDuration: 250,
            icon: "danger",
            style: {
              justifyContent: 'center',
            },
          });
        }
      })
      .catch(e => {
        setLoading(false)
        showMessage({
          message: 'Something Went Wrong',
          type:"danger",
          backgroundColor: COLORS.red,
          color: COLORS.white,
          titleStyle: {
            alignSelf: 'center',
            ...FONTS.h3,
          },
          animationDuration: 250,
          icon: "danger",
          style: {
            justifyContent: 'center',
          },
        });
      });
  }
  async function checkToken() {
    setLoading(true);
    await axios.get(
      baseURL + `/reset-password/token-validation?token=${token}`,
    ).then(response=>{
      if(response.status==200){
        setLoading(false);
        setShowB2(false)
        setTokeisvalid(true)
      }
      else{
        settokenErr("Invalid OTP Please Check")
        setLoading(false);
        setShowB2(false)
      }
    }).catch(e=>{
      settokenErr("Invalid OTP Please Check")
      setLoading(false);
      setShowB2(false)
    })
    
  }

  function renderHeader() {
    return (
      <Header
        leftComponent={
          <div
            style={{
              justifyContent: 'center',
              marginLeft: -15,
            }}>
            <TouchableOpacity
              style={{
                // marginLeft: 25,
                backgroundColor: COLORS.Primary,
                height: 40,
                width: 40,
                justifyContent: 'center',
                borderRadius: 40 / 2,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={images.back}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.white,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
          </div>
        }
        img={images.herdhelp}
        imgstyle={{
          marginTop: 100,
          marginLeft: -20,
        }}
        containerStyle={{
          margin: '10%',
        }}
      />
    );
  }
  function renderForm() {
    return (
      <div
        style={{
          marginTop: SIZES.radius,
        }}>
        <p
          style={{
            ...FONTS.h2,
            alignSelf: 'center',
            marginTop: '2%',
          }}>
          Forgot Password?
        </p>
        <p
          style={{
            ...FONTS.body3,
            alignSelf: 'center',
          }}>
          Enter your Registered Email to continue!
        </p>
        <div
          style={{
            flex: 1,
            marginTop: SIZES.height > 800 ? SIZES.padding * 1.2 : SIZES.radius,
          }}>
          <FormInput
            label={'Email'}
            value={email}
            onChange={text => {
              utils.validateEmail(text, setEmailErr);
              setEmail(text);
            }}
            col={
              EmailErr.split(' ').includes('OTP') ? COLORS.Primary : COLORS.red
            }
            returnKeyType={'next'}
            errorMsg={EmailErr}
            placeholder={'Enter Registered Email'}
            keyboardType="email-address"
            autoCompleteType="email"
            appendComponent={
              <div
                style={{
                  justifyContent: 'center',
                }}>
                  {
                    isEmailvalid?
                <Image
                  source={
                    images.correct
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                    COLORS.Primary

                  }}
                />:null
            }
              </div>
            }
          />
          {email != '' && showB1 ? (
            !loading ? (
              <TouchableOpacity
                style={{
                  padding: 10,
                }}
                onPress={() => getToken()}>
                <p
                  style={{
                    ...FONTS.h3,
                    alignSelf: 'center',
                    color: COLORS.Primary,
                  }}>
                  Generate OTP
                </p>
              </TouchableOpacity>
            ) : (
              <ActivityIndicator
                color={COLORS.Primary}
                style={{
                  margin: 10,
                }}
              />
            )
          ) : null}
        </div>
      </div>
    );
  }
  function hiddenContent1() {
    return (
      <div
        style={{
          flex: 1,
        }}>
        <FormInput
          label={'OTP'}
          value={token}
          onChange={text => {
            setToken(text);
          }}
          returnKeyType={'next'}
          placeholder={'Enter OTP'}
          appendComponent={
            <div
              style={{
                justifyContent: 'center',
              }}>
              {
                    isTokenvalid?
                <Image
                  source={
                    images.correct
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                    COLORS.Primary

                  }}
                />:null
            }
            </div>
          }
        />
        {token != '' && showB2 ? (
          !loading ? (
            <TouchableOpacity
              style={{
                padding: 10,
              }}
              onPress={() => checkToken()}>
              <p
                style={{
                  ...FONTS.h3,
                  alignSelf: 'center',
                  color: COLORS.Primary,
                }}>
                Verify Token
              </p>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator
              color={COLORS.Primary}
              style={{
                margin: 10,
              }}
            />
          )
        ) : null}
      </div>
    );
  }
  function hiddenContent2() {
    return (
      <div
        style={{
          flex: 1,
          marginTop:40
        }}>
        <FormInput
          label={'New Password'}
          value={password}
          onChange={text => {
            utils.validatePassword(text,setPassErr)
            setPassword(text);
          }}
          errorMsg={passErr}
          returnKeyType={'next'}
          placeholder={'Enter New Password'}
          secureTextEntry={!showPass}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => setShowPass(!showPass)}>
              <Image
                source={showPass ? images.eye_close : images.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: showPass ? COLORS.Primary : COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />
        
        <TextButton
        border={false}
        icon={images.update}
        buttonContainerStyle={{
          height: 55,
          alignItems: 'center',
          borderRadius: SIZES.radius,
          marginTop: 40,
          backgroundColor:
            password != '' ? COLORS.Primary : COLORS.transparentPrimary2,
        }}
        loading={loading}
        onPress={() => {
          setNewPass()
        }}
        label={'Set Password'}
      />
        
      </div>
    );
  }
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {renderHeader()}
      {/* <KeyboardAwareScrolldiv
        keyboardDismissMode="interactive"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: SIZES.radius,
          // paddingHorizontal: SIZES.padding,
        }}> */}
        {renderForm()}
        {isEmailvalid ? hiddenContent1() : null}
        {isTokenvalid ? hiddenContent2() : null}
      {/* </KeyboardAwareScrolldiv> */}
      
    </div>
  );
}
