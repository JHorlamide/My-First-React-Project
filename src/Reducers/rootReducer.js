const initState = {
  posts: [
    {
      id: "1",
      title: "Using React Hooks Effectively",
      body:
        "React Hooks is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "2",
      title: "The Use Of Python In Machine Learning",
      body:
        "Python For Machine Learning is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "3",
      title: "Facial Recognition Using JavaScript",
      body:
        "Facial Recognition Using JavaScript is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: "4",
      title:
        "The difference between class base component and a functional component",
      body:
        "The difference between class base component and a functional component is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newState = state.posts.filter((post) => {
      return action.id !== post.id
    });

    return {
      ...state,
      posts: newState
    }
  }

  return state;
};

export default rootReducer;

/*** 
 * 
 * useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      initState.posts = res.data
    })
    .catch((err) => {
      console.error('Error from rootReducer: ', err);
    })
}, []);
 * 
 * ***/
