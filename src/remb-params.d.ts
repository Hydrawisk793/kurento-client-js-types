import { ComplexType } from "./complex-type";

export declare class RembParams extends ComplexType
{
    public constructor();

    public packetsRecvIntervalTop : number;

    public exponentialFactor : number;

    public linealFactorMin : number;

    public linealFactorGrade : number;

    public decrementFactor : number;

    public thresholdFactor : number;

    public upLosses : number;

    public rembOnConnect : number;
}
