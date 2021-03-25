import { ComplexType } from "./complex-type";
import { MediaElement, MediaType } from "./media-element";

export declare class ElementConnectionData extends ComplexType
{
    public constructor();

    public source : MediaElement;

    public sink : MediaElement;

    public type : MediaType;

    public sourceDescription : string;

    public sinkDescription : string;
}
