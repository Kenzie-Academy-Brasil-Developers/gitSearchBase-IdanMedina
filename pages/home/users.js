export const last = [];

export function saveLast(item){
    if(last.length < 3){
      return last.push(item)
    }else{
      last.splice(0,1)
      return last.push(item)
    }
  }