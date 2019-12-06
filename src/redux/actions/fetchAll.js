import { GET_CONTENT } from './types'
// import {data} from './data'
import axios from 'axios'


export const fetchAll = () => {
    return async(dispatch) => {
        try {
            const {data} = await axios.get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')
            let payload = {
                editor_choice: data["editor's choice"],
                latest_choice: data["latest articles"],
                latest_review: data["latest review"]
            }
            dispatch(successFetch(payload))
        } 
        catch (err) {
            console.log(err);
        }
    }
}

export const successFetch = (payload) => {
    return {type: GET_CONTENT , payload: payload}
}