import { Error } from "./error";

export declare type AsyncMethodCallback<T> = (
    error : Error,
    result : T
) => void;
