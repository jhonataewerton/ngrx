// import * as fromPersonActions from "./person.action";
// import { Person } from "../person";

// export const initialState: Person[] = [];

// export function reducer(state = initialState, action: fromPersonActions.PersonActions) {

//   switch (action.type) {
//     case fromPersonActions.PersonActionTypes.PERSON_ALL:
//       return state;
//     case fromPersonActions.PersonActionTypes.PERSON_DELETE:
//       return state.filter(p => p.id != action.payload.id);
//     case fromPersonActions.PersonActionTypes.PERSON_NEW:
//       return state.concat([action.payload.person])
//     case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
//       let people = state.slice()
//       let i = people.findIndex(p => p.id === action.payload.person.id)
//       if (i >= 0) {
//         people[i] = action.payload.person
//         return people;
//       }
//     default:
//       return state;

//   }

// }
