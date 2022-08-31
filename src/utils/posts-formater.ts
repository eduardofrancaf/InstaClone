export const getPosts = (posts: any[]) => {
  const divisionRest = posts.length % 3;
  if (divisionRest !== 0) {
    let arrayOfBlanks = [];
    for (let i = 1; i <= 3 - divisionRest; i++) {
      arrayOfBlanks.push({
        id: posts.length + i,
        image: '',
        images: [],
      });
    }
    return [...posts, ...arrayOfBlanks];
  }
  return posts;
};
