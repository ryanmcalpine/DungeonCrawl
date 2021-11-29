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
    async setFighterEquipped(fighterEquipped,user_id)
    {
        return axiosAgent.get(`/users/setFighterEquipped/${fighterEquipped}/${user_id}/`)
    }
    async setMageEquipped(mageEquipped,user_id)
    {
        return axiosAgent.get(`/users/setMageEquipped/${mageEquipped}/${user_id}/`)
    }
    async setRogueEquipped(rogueEquipped,user_id)
    {
        return axiosAgent.get(`/users/setRogueEquipped/${rogueEquipped}/${user_id}/`)
    }
    async updateGold(user_id,gold)
    {
        console.log('updateGold called');
        return axiosAgent.get(`/users/updateUserGold/${gold}/${user_id}/`)
    }
    async getF0Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getfighter0Unlocked/${user_id}/`)
    }
    async getF1Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getfighter1Unlocked/${user_id}/`)
    }
    async getF2Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getfighter2Unlocked/${user_id}/`)
    }
    async getF3Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getfighter3Unlocked/${user_id}/`)
    }
    async getF4Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getfighter4Unlocked/${user_id}/`)
    }
    async getM0Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getmage0Unlocked/${user_id}/`)
    }
    async getM1Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getmage1Unlocked/${user_id}/`)
    }
    async getM2Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getmage2Unlocked/${user_id}/`)
    }
    async getM3Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getmage3Unlocked/${user_id}/`)
    }
    async getM4Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getmage4Unlocked/${user_id}/`)
    }
    async getR0Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getrogue0Unlocked/${user_id}/`)
    }
    async getR1Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getrogue1Unlocked/${user_id}/`)
    }
    async getR2Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getrogue2Unlocked/${user_id}/`)
    }
    async getR3Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getrogue3Unlocked/${user_id}/`)
    }
    async getR4Unlocked(user_id)
    {
        return axiosAgent.get(`/users/getrogue4Unlocked/${user_id}/`)
    }
    async setF0Unlocked(fighter0Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setfighter0Unlocked/${fighter0Unlocked}/${user_id}/`)
    }
    async setF1Unlocked(fighter1Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setfighter1Unlocked/${fighter1Unlocked}/${user_id}/`)
    }
    async setF2Unlocked(fighter2Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setfighter2Unlocked/${fighter2Unlocked}/${user_id}/`)
    }
    async setF3Unlocked(fighter3Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setfighter3Unlocked/${fighter3Unlocked}/${user_id}/`)
    }
    async setF4Unlocked(fighter4Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setfighter4Unlocked/${fighter4Unlocked}/${user_id}/`)
    }
    async setM0Unlocked(mage0Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setmage0Unlocked/${mage0Unlocked}/${user_id}/`)
    }
    async setM1Unlocked(mage1Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setmage1Unlocked/${mage1Unlocked}/${user_id}/`)
    }
    async setM2Unlocked(mage2Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setmage2Unlocked/${mage2Unlocked}/${user_id}/`)
    }
    async setM3Unlocked(mage3Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setmage3Unlocked/${mage3Unlocked}/${user_id}/`)
    }
    async setM4Unlocked(mage4Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setmage4Unlocked/${mage4Unlocked}/${user_id}/`)
    }
    async setR0Unlocked(rogue0Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setrogue0Unlocked/${rogue0Unlocked}/${user_id}/`)
    }
    async setR1Unlocked(rogue1Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setrogue1Unlocked/${rogue1Unlocked}/${user_id}/`)
    }
    async setR2Unlocked(rogue2Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setrogue2Unlocked/${rogue2Unlocked}/${user_id}/`)
    }
    async setR3Unlocked(rogue3Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setrogue3Unlocked/${rogue3Unlocked}/${user_id}/`)
    }
    async setR4Unlocked(rogue4Unlocked,user_id)
    {
        return axiosAgent.get(`/users/setrogue4Unlocked/${rogue4Unlocked}/${user_id}/`)
    }
    async getArmor(itemID)
    {
        return axiosAgent.get(`/items/getArmor/${itemID}`)
    }
    async getConsumable(itemID)
    {
        return axiosAgent.get(`/items/getConsumable/${itemID}`)
    }

}
