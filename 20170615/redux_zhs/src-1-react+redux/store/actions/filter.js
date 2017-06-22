import * as actionTypes from "../action-types"
export default {
    changeFilter(filter){
        return {
            type:actionTypes.CHANGE_FILTER,
            filter
        }
    }
}