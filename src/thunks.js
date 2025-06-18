import axios from 'axios';
import {
  loadingStarted,
  loadingCompleted,
  loadingFailed,
} from './loadingSlice';

export const loadTodos = () => async (dispatch) => {
  dispatch(loadingStarted());
  try {
    const response = await axios.get('/api/todos');
    const todos = response.data;
    console.log(todos);
    dispatch(loadingCompleted(todos));
  } catch (e) {
    loadingFailed(e);
  }
}