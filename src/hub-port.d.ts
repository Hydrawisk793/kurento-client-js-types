import { MediaElement, MediaElementEventHandlerMap } from "./media-element";

export declare class HubPort extends MediaElement
{
    public static readonly constructorParams : {
        hub : {
            type : "kurento.Hub";

            required : true;
        };
    };

    public constructor();
}

export declare interface HubPortEventHandlerMap extends MediaElementEventHandlerMap
{

}
