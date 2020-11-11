export const ACTION_INCREMENT = 'INCREMENT'
export const ACTION_DECREMENT = 'DECREMENT'

export function increment(num, account){
  return{
    type: ACTION_INCREMENT,
    payload:{
      amount: num,
      account
      
    }
  }
}

export function decrement(num, account){
  return{
    type: ACTION_DECREMENT,
    payload:{
      amount: num,
      account
      
    }
  }
}