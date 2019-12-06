import { GET_CONTENT } from '../actions/types'

const initalState = {
    isLoading: true,
    errMsg: null,
    editor_choice: [],
    latest_choice: [],
    latest_review: []
}

export default function femaleDaily(state = initalState, { type, payload }) {
    switch (type) {
        case GET_CONTENT:
            return {
                ...state,
                isLoading: false,
                errMsg: null,
                editor_choice: payload.editor_choice,
                latest_choice: payload.latest_choice,
                latest_review: payload.latest_review
            }
        default:
            return {
                ...state
            }
    }
}
