import { AsyncMethodCallback } from "./async-method-callback";
import { Hub, HubEventHandlerMap } from "./hub";
import { HubPort } from "./hub-port";

export declare class DispatcherOneToMany extends Hub
{
    public static readonly constructorParams : {
        mediaPipeline : {
            type : "kurento.MediaPipeline";

            required : true;
        };
    };

    public constructor();

    public removeSource(
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public setSource(
        source : HubPort,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;
}

export declare interface DispatcherOneToManyEventMap extends HubEventHandlerMap
{

}
