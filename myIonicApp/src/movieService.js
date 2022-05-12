import http from "./Http-comman";  
class MovieService {  
     
    getAll() {  
        return http.get("https://eventcinemasapi.s3.ap-southeast-2.amazonaws.com/GetNowShowing.json");  
      }  
        
}  
export default new MovieService();  