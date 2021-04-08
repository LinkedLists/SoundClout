import * as UserApiUtil from "../util/user_api_util"

export const RECEIVE_USER = "RECEIVE_USER"
export const CLEAR_USER_STATE = "CLEAR_USER_STATE"

const receiveUser = (user) => {
  return({
    type: RECEIVE_USER,
    user
  })
}

export const clearUserState = () => {
  return({
    type: CLEAR_USER_STATE
  })
}

export const fetchUser = (userId) => (dispatch) => {
  UserApiUtil.fetchUser(userId).then((user) => dispatch(receiveUser(user)))
}