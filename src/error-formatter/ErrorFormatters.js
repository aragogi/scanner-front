
export const errorMessage = exp => {
    try {
        const data = JSON.parse(exp.response.data)
        return data.message
    } catch (e) {
        try {
            if (exp.response.data.message !== undefined) {
                return exp.response.data.message
            }
            return exp.message
        }catch(exp){
            return e.message;
        }

    }
}

