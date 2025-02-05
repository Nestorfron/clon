import { baseUrl, endpointsUrls } from "../constants"


export const jobApplicationService = () =>{


    const postjobApplication = async (formData) =>{

        
        const response = await fetch(`${baseUrl}+"/jobApplications"`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });  
        if(!response){
            throw new Error("Error al postularse")
        }
        console.log(response.json())
        return response.json();
    }

    const MyapplicationsService = async () =>{
        try{
    
    
            const response = await fetch(`${baseUrl}+"/jobApplications"`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },
            });        
            return response;
            
    
    
        }catch(error){
    
        }
    }
    return {postjobApplication, MyapplicationsService}
}