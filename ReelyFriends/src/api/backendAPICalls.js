import axios from 'axios'

const getUserFriends = async(user) => {
    try {
    const data = await axios.get(`https://reelyfriends-api-mnnh.onrender.com/users/${user}`)
    return data.data.friends;
    }
    catch (error){
        console.log(error)
    }
    }

module.exports =  getUserFriends
