export const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas"

export const header = (token) =>{
      return {
          headers:{
              auth:token
          }
      }
}