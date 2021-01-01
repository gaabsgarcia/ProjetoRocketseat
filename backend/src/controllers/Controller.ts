import {Request, Response} from 'express';

export default{
    async index(request:Request, response:Response){

        return response.json("{status=ok}");
    },

    
}