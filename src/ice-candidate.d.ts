import { ComplexType } from "./complex-type";

export declare class IceCandidate extends ComplexType
{
    public constructor();

    public candidate : string;

    public sdpMid : string;

    public sdpMLineIndex : number;
}
