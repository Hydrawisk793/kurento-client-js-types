import { ComplexType } from "./complex-type";

export declare class IceConnection extends ComplexType
{
    public constructor();

    public streamId : string;

    public componentId : number;

    public state : IceComponentState;
}

export declare const enum IceComponentState
{
    DISCONNECTED = "DISCONNECTED",

    GATHERING = "GATHERING",

    CONNECTING = "CONNECTING",

    CONNECTED = "CONNECTED",

    READY = "READY",

    FAILED = "FAILED",
}
