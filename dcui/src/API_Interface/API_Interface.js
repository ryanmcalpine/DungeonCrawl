import axios from 'axios';

const AxiosConfigured = () => {
    // Indicate to the API that all requests for this app are AJAX
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // Set the baseURL for all requests to the API domain instead of the current domain
    // axios.defaults.baseURL = `http://localhost:8443/api/v1`;
    axios.defaults.baseURL = `http://localhost:8443/api`;


    // Allow the browser to send cookies to the API domain (which include auth_token)
    axios.defaults.withCredentials = true;


//    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token;

    return axios;
};


const axiosAgent = AxiosConfigured();

export default class APIInterface {

    async getUserInfo(user_id) {
        return axiosAgent.get(`login/${user_id}`)
            .then(userInfo => userInfo.data)
            .catch(error => (
                {
                    error,
                    user: undefined
                }));
    }
    async gethighScores()
    {
        return axiosAgent.get('/users/highScores')
    }
    async allUsers()
    {
        return axiosAgent.get('/users/all-users')
    }
    async getUser(user_id)
    {
        return axiosAgent.get(`/users/getUser/${user_id}/`)
    }
    async getGold(user_id)
    {
        return axiosAgent.get(`/users/getGold/${user_id}`)
    }
    async getFighterMaxHP(user_id)
    {
        return axiosAgent.get(`/users/getFighterMaxHP/${user_id}/`)
    }
    async getfighterPhysicalAttack(user_id)
    {
        return axiosAgent.get(`/users/getfighterPhysicalAttack/${user_id}/`)
    }
    async getfighterMagicalAttack(user_id)
    {
        return axiosAgent.get(`/users/getfighterMagicalAttack/${user_id}/`)
    }
    async getfighterPhysicalDefense(user_id)
    {
        return axiosAgent.get(`/users/getfighterPhysicalDefense/${user_id}/`)
    }
    async getfighterMagicDefense(user_id)
    {
        return axiosAgent.get(`/users/getfighterMagicDefense/${user_id}/`)
    }
    async getmageMaxHP(user_id)
    {
        return axiosAgent.get(`/users/getmageMaxHP/${user_id}/`)
    }
    async getmagePhysicalAttack(user_id)
    {
        return axiosAgent.get(`/users/getmagePhysicalAttack/${user_id}/`)
    }
    async getmageMagicalAttack(user_id)
    {
        return axiosAgent.get(`/users/getmageMagicalAttack/${user_id}/`)
    }
    async getmagePhysicalDefense(user_id)
    {
        return axiosAgent.get(`/users/getmagePhysicalDefense/${user_id}/`)
    }
    async getmageMagicDefense(user_id)
    {
        return axiosAgent.get(`/users/getmageMagicDefense/${user_id}/`)
    }
    async getrogueMaxHP(user_id)
    {
        return axiosAgent.get(`/users/getrogueMaxHP/${user_id}/`)
    }
    async getroguePhysicalAttack(user_id)
    {
        return axiosAgent.get(`/users/getroguePhysicalAttack/${user_id}/`)
    }
    async getrogueMagicalAttack(user_id)
    {
        return axiosAgent.get(`/users/getrogueMagicalAttack/${user_id}/`)
    }
    async getroguePhysicalDefense(user_id)
    {
        return axiosAgent.get(`/users/getroguePhysicalDefense/${user_id}/`)
    }
    async getrogueMagicDefense(user_id)
    {
        return axiosAgent.get(`/users/getrogueMagicDefense/${user_id}/`)
    }
    async getFighterSpeed(user_id)
    {
        return axiosAgent.get(`/users/getFighterSpeed/${user_id}/`)
    }
    async getMageSpeed(user_id)
    {
        return axiosAgent.get(`/users/getMageSpeed/${user_id}/`)
    }
    async getRogueSpeed(user_id)
    {
        return axiosAgent.get(`/users/getRogueSpeed/${user_id}/`)
    }
    async allMonsters()
    {
        return axiosAgent.get(`/monsters/allMonsters`)
    }
    async getMonster(monster_id)
    {
        return axiosAgent.get(`/monsters/getMonster/${monster_id}/`)
    }
    async getMonsterMaxHP(monster_id)
    {
        return axiosAgent.get(`/monsters/getMaxHP/${monster_id}/`)
    }
    async getMonsterPhysicalATK(monster_id)
    {
        return axiosAgent.get(`/monsters/getPhysicalATK/${monster_id}/`)
    }
    async getMonsterPhysicalDEF(monster_id)
    {
        return axiosAgent.get(`/monsters/getPhysicalDEF/${monster_id}/`)
    }

    async getMonsterMagicATK(monster_id)
    {
        return axiosAgent.get(`/monsters/getMagicATK/${monster_id}/`)
    }
    async getMonsterMagicDEF(monster_id)
    {
        return axiosAgent.get(`/monsters/getPhysicalDEF/${monster_id}/`)
    }
    async getMonsterSpeed(monster_id)
    {
        return axiosAgent.get(`/monsters/getSpeed/${monster_id}/`)
    }
    async getFighterEquipped(user_id)
    {
        return axiosAgent.get(`/users/getfighterEquipped/${user_id}/`)
    }
    async getMageEquipped(user_id)
    {
        return axiosAgent.get(`/users/getmageEquipped/${user_id}/`)
    }
    async getRogueEquipped(user_id)
    {
        return axiosAgent.get(`/users/getrogueEquipped/${user_id}/`)
    }
    async updateGold(user_id,gold)
    {
        console.log('updateGold called');
        return axiosAgent.get(`/users/updateUserGold/${gold}/${user_id}/`)
    }


}
