import { apiClient } from ".";

const getReq = async (path)=>{
    try {
        const response = await apiClient.get(path)
        return response;
    } catch (error) {
        console.log(error);
    }
}


const postReq = async (path, data)=>{
    try {
        const response = await apiClient.post(path, data)
        return response;
    } catch (error) {
        console.log(error);
    }
}


const deleteReq = async (path)=>{
    try {
        const response = await apiClient.delete(path)
        return response;
    } catch (error) {
        console.log(error);
    }
}


const putReq = async (path, data)=>{
    try {
        const response = await apiClient.put(path, data)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export {getReq, postReq, deleteReq, putReq};