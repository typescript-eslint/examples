import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';

function reducer() {
    // ...
}

const store = configureStore({ reducer });

const exampleThunk = createAsyncThunk(
  'example',
  async () => {
    // ...
  },
);

store.dispatch(exampleThunk());
