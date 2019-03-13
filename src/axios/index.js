import JsonP from 'jsonp'
export default class Axios {
  jsonp(options){
      return new Promise((resolve, reject)=>{
          JsonP(options.url,{
              param:'callback'
          },function (err,response) {
                if(response.status==='success'){
                    resolve(response.results)
                }else {
                    reject(response.message)
                }
          })
      })
  }
}
