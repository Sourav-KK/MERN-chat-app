import userDataController from "../../../adapters/controllers/userAuth/userDataController";
import useCases from "../../../useCase";

export const userDetailsControl = userDataController(useCases);
export type userDetailsControl_T = typeof userDetailsControl;
