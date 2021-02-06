import {SET_POSTS,SET_BOOK_INFO,ADD_POST, TOGGLE_MODAL_STATE, TOGGLE_POST_FETCHING_STATE, SET_ISLIKED, INCREASE_LIKE, INCREASE_COMMENT, DECREASE_LIKE} from '../actionTypes'
import axios from 'axios'
export const getallPosts = () => async (dispatch) => {

    try {
      dispatch({type:TOGGLE_POST_FETCHING_STATE})
      dispatch({type:SET_POSTS, payload:null})
      const {data} = await axios.get(
        `http://localhost:4000/post`,{
          headers: { Authorization: `Bearer ${sessionStorage.getItem("auth_token")}` },
        }
      );
      dispatch({type:SET_POSTS, payload:data.posts})

     } catch (err) {
      console.error(err);
      alert(err.message)
    }finally{
      dispatch({type:TOGGLE_POST_FETCHING_STATE})

    }
  };

  export const createPost = (postObj) => async (dispatch) => {

    try {
      dispatch({type:TOGGLE_POST_FETCHING_STATE})

      const {data} = await axios.post(
        `http://localhost:4000/post`,postObj,{
          headers: { Authorization: `Bearer ${sessionStorage.getItem("auth_token")}` },
        }
      );
      console.log(data)
      if(data.success){
        dispatch({
          type:ADD_POST,
          payload:data.post
        })
      }
      else{
        alert(data.message)
      }

     } catch (err) {
      console.error(err);
      alert(err.message)
    }finally{
      dispatch({type:TOGGLE_POST_FETCHING_STATE})

    }
  };


  export const checkuserLike = (postId) => async (dispatch) => {

    try {
      console.log(postId)
      const {data} =await axios({ method: 'get', url:`http://localhost:4000/like/user`,data:postId, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("auth_token") } })
      console.log(data)
      if (data.found){
        dispatch({type:SET_ISLIKED, payload:{postId,liked:true}})

      }
      else{
      dispatch({type:SET_ISLIKED, payload:{postId:postId.postId,liked:false}})

      }

     } catch (err) {
      console.error(err);
      alert(err.message)
    }
  };


  export const addlike = (postId) => async () => {

    try {
      console.log(postId)
      const {data} =await axios({ method: 'post', url:`http://localhost:4000/like`,data:postId, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("auth_token") } })
      console.log(data)
     } catch (err) {
      console.error(err);
      alert(err.message)
    }
  };

  export const removelike = (postId) => async () => {

    try {
      console.log(postId)
      const {data} =await axios({ method: 'delete', url:`http://localhost:4000/like`,data:postId, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("auth_token") } })
      console.log(data)
     } catch (err) {
      console.error(err);
      alert(err.message)
    }
  };

  export const increaseLike =(postId)=>{
    return{
      type:INCREASE_LIKE,
      payload:postId
    }
  }

  export const toggleModalstate =(postId)=>{
    return{
      type:TOGGLE_MODAL_STATE,
    }
  }

  export const setBookinfo =(book)=>{
    return{
      type:SET_BOOK_INFO,
      payload:book
    }
  }

  export const decreaseLike =(postId)=>{
    return{
      type:DECREASE_LIKE,
      payload:postId
    }
  }

  export const increaseComment =(postId)=>{
    return{
      type:INCREASE_COMMENT,
      payload:postId
    }
  }