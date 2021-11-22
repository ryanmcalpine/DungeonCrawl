import axios from 'axios';

const AxiosConfigured = () => {
    // Indicate to the API that all requests for this app are AJAX
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // Set the baseURL for all requests to the API domain instead of the current domain
    // axios.defaults.baseURL = `http://localhost:8443/api/v1`;
    axios.defaults.baseURL = `http://localhost:3000/api`;


    // Allow the browser to send cookies to the API domain (which include auth_token)
    axios.defaults.withCredentials = true;


//    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token;

    return axios;
};


const axiosAgent = AxiosConfigured();

export default class APIInterface {

    async getUserInfo(user_id) {
        return axiosAgent.get(`users/login/${user_id}`)
            .then(userInfo => userInfo.data)
            .catch(error => (
                {
                    error,
                    user: undefined
                }));
    }
    async highScores()
    {
        return axiosAgent.get('/users/highScores')
    }

    /*async allRoutes() {
        return axiosAgent.get(`routes/all-routes`);
    }
    async routesWithRoutesID(routeID) {
        return axiosAgent.get(`routes/${routeID}`);
    }
    async allMarkets(){
        return axiosAgent.get(`markets/all-markets`);
    }
    async marketsWithMarketID(marketID) {
        return axiosAgent.get(`markets/${marketID}`);
    }
    async allEmployees(){
        return axiosAgent.get(`employees/all-employees`);
    }
    async employeesWithEmployeeID(employeeID) {
        return axiosAgent.get(`employees/${employeeID}`);
    }
    async getCurrCycle() {
        return axiosAgent.get(`transactions/get-CurrCycle/gcc`);
    }
    async numTransactions(cycleID) {
        return axiosAgent.get(`transactions/${cycleID}`);
    }
    async one_account(cycleID,accountID) {
        return axiosAgent.get(`transactions/${cycleID}/${accountID}/one-account`);
    }
    async trans_for_route(cycleID,routeID) {
        return axiosAgent.get(`transactions/${cycleID}/${routeID}/trans-for-route`);
    }
    async trans_all_routes(cycleID) {
        return axiosAgent.get(`transactions/${cycleID}/all-routes`);
    }
    async trans_for_market(cycleID,marketID) {
        return axiosAgent.get(`transactions/${cycleID}/${marketID}/trans-for-market`);
    }
    async getAcctName(accountID) {
        return axiosAgent.get(`transactions/getAcctName/${accountID}`);
    }*/

}
