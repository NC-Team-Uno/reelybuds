import axios from "axios";

const getAllUsers = async () => {
  try {
    const { data } = await axios.get(
      `https://reelyfriends-api-mnnh.onrender.com/users`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

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

module.exports = {
  getUserFriends,
  postWatchGroup,
  getUserWatchGroups,
  getAllUsers,
};
