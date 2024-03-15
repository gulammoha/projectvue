import{defineStore} from "pinia"

export const useUserStore = defineStore('user'{
    state: ()=>{
       token:''
       role:"",
    }

   actions:{
      setToken(tokenVal,roleVal
        ){
          this.token=tokenVal;
          this.role=roleVal;
      },
      getToken(){
         return  this.token;
      }
   }
})

