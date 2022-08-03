// import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosIns from "../helpers/helpers";
import axios from "axios";
import { baseURL } from "../helpers/helpers";
export const Init = () => {
  return async dispatch => {
    // let token = await AsyncStorage.getItem('token');
    // let id = await AsyncStorage.getItem('id');
    // if (token !== null && id!==null) {
      dispatch({
        type: 'LOGIN',
        // payload: token,
      })
    // }
  }
}

export const Login_Function = (token) => {
  return async dispatch => {
    dispatch({
      type: 'LOGIN',
      payload: token,
    })
  }
}
export const storeID = (id) => {
  return async dispatch => {
    dispatch({
      type: 'ID',
      payload: id,
    })
  }
}
export const WeightUnit = (cond) => {
    return async dispatch => {
      // if (cond) {
      //   await AsyncStorage.setItem('unit', cond);
      // }
      dispatch({
        type: 'UNIT',
        payload: cond,
      })
    }
  }
  // export const getUnit = () => {
  //   return async dispatch => {
  //     //  let unit =  await AsyncStorage.getItem('unit');
  //     dispatch({
  //       type: 'UNIT',
  //       payload: unit,
  //     })
  //   }
  // }
  export const UserData = () => {
    return async dispatch => {
      let {data} = await axiosIns.get('profile/');
      dispatch({
        type: 'USER',
        payload:data[0]
      })
    }
  }
  export const getHerds = (token) => {
    return async dispatch => {
      let data = await axios.get(baseURL + '/animals',{
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
              },
        })
      dispatch({
        type: 'HERDS',
        payload:data.data
      })
    }
  }
  export const getStatus = () => {
    return async dispatch => {
      let {data} = await axiosIns.get('getstatuses/');
      dispatch({
        type: 'STATUS',
        payload:data
      })
    }
  }
  export const getTags = () => {
    return async dispatch => {
      let {data} = await axiosIns.get('animaltags/');
      dispatch({
        type: 'TAGS',
        payload:data
      })
    }
  }
  export const getSpecies = (token) => {
    return async dispatch => {
      let data = await axios.get(baseURL + '/getcategories',{
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          },
    })
      dispatch({
        type: 'CATEGORY',
        payload:data.data
      })
    }
  }
  export const getFinance = (token) => {
    return async dispatch => {
      let data = await axios.get(baseURL + '/finance',{
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          },
    })
      dispatch({
        type: 'FINANCE',
        payload:data.data
      })
    }
  }
  export const getAlerts = () => {
    return async dispatch => {
      let {data} = await axiosIns.get('alerts/');
      dispatch({
        type: 'ALERTS',
        payload:data
      })
    }
  }
  export const getAnimal = (tag) => {
    return async dispatch => {
      let {data} = await axiosIns.get(`animals/${tag}`);
      dispatch({
        type: 'ONEANIMAL',
        payload:data
      })
    }
  }
  export const CleanAnimal = () => {
    return async dispatch => {
      dispatch({
        type: 'CLEAN',
        payload:null
      })
    }
  }
  export const getMedical = (tag) => {
    return async dispatch => {
      let {data} = await axiosIns.get(`getmedication/${tag}`);
      dispatch({
        type: 'ONEMED',
        payload:data
      })
    }
  }
  export const getFcat = (token) => {
    return async dispatch => {
      let data = await axios.get(baseURL + '/getfinancecategories',{
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
          },
    })
      dispatch({
        type: 'FCAT',
        payload:data.data
      })
    }
  }

export const Logout = () => {
  return async dispatch => {
    // await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT'
    })
  }
}