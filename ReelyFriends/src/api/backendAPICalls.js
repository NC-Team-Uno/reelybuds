import axios from "axios";

const getUserFriends = async (user) => {
  try {
    const data = await axios.get(
      `https://reelyfriends-api-mnnh.onrender.com/users/${user}`
    );
    return data.data.friends;
  } catch (error) {
    console.log(error);
  }
};

const postWatchGroup = (groupToPost) => {
  try {
    return axios.post(
      "https://reelyfriends-api-mnnh.onrender.com/groups",
      groupToPost
    );
  } catch (error) {
    console.log(error);
  }
};

const getUserWatchGroups = (user) => {
  try {
    return axios
      .get("https://reelyfriends-api-mnnh.onrender.com/groups")
      .then(({ data }) => {
        return data.filter((group) => {
          if (group.members.includes(user)) {
            return group;
          }
        });
      });
  } catch (error) {
    console.log(error);
  }
};

const getLikedFilms = (user) => {
  try {
    return axios
      .get(`https://reelyfriends-api-mnnh.onrender.com/users/${user}`)
      .then((data) => {
        return data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

const likeFilms = (user, id) => {
  try {
    return axios.patch(
      `https://reelyfriends-api-mnnh.onrender.com/users/${user.username}`,
      { likedFilms: [...user.likedFilms, id] }
    );
  } catch (error) {
    console.log(error);
  }
};

const unlikeFilms = (user, id) => {
  const updatedFilms = user.likedFilms.filter(
    (prevId) => prevId !== id.toString()
  );
  try {
    return axios.patch(
      `https://reelyfriends-api-mnnh.onrender.com/users/${user.username}`,
      { likedFilms: updatedFilms }
    );
  } catch (error) {
    console.log(error);
  }
};

const wishFilms = (user, id) => {
  try {
    return axios.patch(
      `https://reelyfriends-api-mnnh.onrender.com/users/${user.username}`,
      { wishlist: [...user.wishlist, id] }
    );
  } catch (error) {
    console.log(error);
  }
};

const unwishFilms = (user, id) => {
  const updatedFilms = user.wishlist.filter(
    (prevId) => prevId !== id.toString()
  );
  try {
    return axios.patch(
      `https://reelyfriends-api-mnnh.onrender.com/users/${user.username}`,
      { wishlist: updatedFilms }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserFriends,
  postWatchGroup,
  getUserWatchGroups,
  getLikedFilms,
  likeFilms,
  unlikeFilms,
  wishFilms,
  unwishFilms,
};
