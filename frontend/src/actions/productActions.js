import { PRODUCT_LIST_FAIL, PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST } from "../constants/productConstant"
import Axios from "axios";

export const listsProducts = () => async (dispatch) =>{
    dispatch({
        type:PRODUCT_LIST_REQUEST,
    });
    try {
        const { data } = await Axios.get("/api/products");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message });
    }
}