import {atom} from "jotai";
import { atomWithStorage } from 'jotai/utils'



const Course_Hint_Deleted =atom(false)

const Course_SuccessfullyDeleted =atom(false)

const Course_FailedDelete1 = atom(false)

const Course_FailedDelete2 = atom(false)

const Course_SuccessfullySaved = atom(false)

const Course_FailedSaved = atom(false)

const Course_Hint_Saved =atom(false)

const Course_ShowSuccess = atom(false)

const Course_ShowFailed = atom(false)

const userInfo = { user_email: ""}
const UserInfo= atomWithStorage("UserEmail",userInfo)

export {UserInfo,Course_Hint_Deleted,Course_SuccessfullyDeleted,Course_FailedDelete1,Course_FailedDelete2,Course_SuccessfullySaved,Course_FailedSaved,Course_ShowSuccess,Course_ShowFailed,Course_Hint_Saved}
