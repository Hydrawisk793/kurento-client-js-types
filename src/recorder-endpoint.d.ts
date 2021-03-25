import { AsyncMethodCallback } from "./async-method-callback";
import { UriEndpoint, UriEndpointEventHandlerMap } from "./uri-endpoint";

export declare class RecorderEndpoint extends UriEndpoint
{
    public constructor();

    public on<K extends keyof RecorderEndpointEventHandlerMap>(
        event : K,
        callback : RecorderEndpointEventHandlerMap[K]
    ) : this;

    public once<K extends keyof RecorderEndpointEventHandlerMap>(
        event : K,
        callback : RecorderEndpointEventHandlerMap[K]
    ) : this;

    public off<K extends keyof RecorderEndpointEventHandlerMap>(
        event : K,
        callback : RecorderEndpointEventHandlerMap[K]
    ) : this;

    public addListener<K extends keyof RecorderEndpointEventHandlerMap>(
        event : K,
        callback : RecorderEndpointEventHandlerMap[K]
    ) : this;

    public removeListener<K extends keyof RecorderEndpointEventHandlerMap>(
        event : K,
        callback : RecorderEndpointEventHandlerMap[K]
    ) : this;

    public removeAllListeners<K extends keyof RecorderEndpointEventHandlerMap>(
        event : K
    ) : this;

    public record(
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public stopAndWait(
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;
}

export declare interface RecorderEndpointEventHandlerMap extends UriEndpointEventHandlerMap
{
    "Paused" : (
        e : any
    ) => void;

    "Recording" : (
        e : any
    ) => void;

    "Stopped" : (
        e : any
    ) => void;
}
