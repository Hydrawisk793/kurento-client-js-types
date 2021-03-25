import { Hub, HubEventHandlerMap } from "./hub";

export declare class Composite extends Hub
{
    public static readonly constructorParams : {
        mediaPipeline : {
            type : "kurento.MediaPipeline";

            required : true;
        };
    };

    public constructor();
}

export declare interface CompositeEventMap extends HubEventHandlerMap
{

}
