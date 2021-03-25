import { RaiseBase } from "./raise-base";

export declare interface Error extends RaiseBase
{
    type : string;

    description : string;

    errorCode : number;
}
