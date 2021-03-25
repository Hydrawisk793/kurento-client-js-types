import { ComplexType } from "./complex-type";

export declare class IceCandidatePair extends ComplexType
{
    public constructor();

    public streamID : string;

    public componentID : number;

    public localCandidate : number;

    public remoteCandidate : number;
}
