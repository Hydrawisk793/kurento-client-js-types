import { AsyncMethodCallback } from "./async-method-callback";
import { Hub, HubEventHandlerMap } from "./hub";
import { HubPort } from "./hub-port";

export declare class Dispatcher extends Hub
{
    public static readonly constructorParams : {
        mediaPipeline : {
            type : "kurento.MediaPipeline";
            required : true;
        };
    };

    public constructor();

    public connect(
        source : HubPort,
        sink : HubPort,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;
}

export declare interface DispatcherEventMap extends HubEventHandlerMap
{

}
