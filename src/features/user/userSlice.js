import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  user: {
    name: 'saieeash',
    email: 'saieeashreddy@gmail.com',
  },
}

export const testingthunk = createAsyncThunk(
  'user/testingThunk',
  async (state, thunkAPI) => {
    console.log('this is the thunk api method called')
    console.log(state)
    console.log(thunkAPI)
    return 'This is return string from thunkmethod'
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    testing: (state, action) => {
      console.log(`this is the testing method in userSlice`)
      console.log(state)
      console.log(action)
    },
  },
  extraReducers: {
    [testingthunk.pending]: (state, action) => {
      console.log('it is loading')
      console.log(state)
      console.log(action)
    },
    [testingthunk.fulfilled]: (state, action) => {
      console.log('it is fulfilled')
      console.log(state)
      console.log(action)
    },
    [testingthunk.rejected]: (state, action) => {
      console.log(
        `it is Rejected ,  here state = ${state} and action  = ${action}`
      )
    },
  },
})

export const { testing } = userSlice.actions

export default userSlice.reducer
