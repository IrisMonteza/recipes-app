export const blankState = {
  user: {
    name: '',
    lastname: '',
    email: '',
  },
};

let initialState = blankState;

const storedState = localStorage.getItem('state');

if (storedState) {
  initialState = JSON.parse(storedState);
}

export default initialState;
