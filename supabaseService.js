import supabase from "./dbConfig.js"; 

const getModel = async id => { 
   
    try { 
        const {data, error} = await supabase 
       

            .from('telephone') 
            .select() 
            .match({id});
            
        if (error) throw error
        return data 
    } catch (e) { 
        throw e 
    }
}

const addModel = async telephone => {
    try {
        const {data, error} = await supabase
            .from('telephone')
            .insert(telephone)

        if (error) throw error
        return data
    } catch (e) {
        console.warn(e);

        return null;
    }
}

export default {
    getModel,
    addModel,
}