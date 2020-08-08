console.log('Commited code');

const getUsername = () => {
  const username = prompt('What is your name');;
};

getUsername();

const getData = async () => {
  const res = await fetch('https://google.com/users/')
    .then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
};