import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?
             const copyState =[...state]
            const newState = copyState.sort((a,b)=>{
             if(a.name>b.name) return 1
             else if(a.name <b.name)return -1
             else return 0
            })
            return action.payload==='up'?newState:newState.reverse()
        }


        case 'check': {
            return state.filter(el=> el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}