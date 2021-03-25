import { ComplexType } from "./complex-type";
import { Fraction } from "./fraction";

export declare class VideoCaps extends ComplexType
{
    public constructor();

    public codec : VideoCodec;

    public framerate : Fraction;
}

export declare const enum VideoCodec
{
    VP8 = "VP8",

    H264 = "H264",

    RAW = "RAW",
}
