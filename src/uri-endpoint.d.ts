import { AsyncMethodCallback } from "./async-method-callback";
import { Endpoint, EndpointEventHandlerMap } from "./endpoint";
import { RaiseBase } from "./raise-base";

export declare abstract class UriEndpoint extends Endpoint
{
    public constructor();

    public on<K extends keyof UriEndpointEventHandlerMap>(
        event : K,
        callback : UriEndpointEventHandlerMap[K]
    ) : this;

    public once<K extends keyof UriEndpointEventHandlerMap>(
        event : K,
        callback : UriEndpointEventHandlerMap[K]
    ) : this;

    public off<K extends keyof UriEndpointEventHandlerMap>(
        event : K,
        callback : UriEndpointEventHandlerMap[K]
    ) : this;

    public addListener<K extends keyof UriEndpointEventHandlerMap>(
        event : K,
        callback : UriEndpointEventHandlerMap[K]
    ) : this;

    public removeListener<K extends keyof UriEndpointEventHandlerMap>(
        event : K,
        callback : UriEndpointEventHandlerMap[K]
    ) : this;

    public removeAllListeners<K extends keyof UriEndpointEventHandlerMap>(
        event : K
    ) : this;

    public pause(
        callback? : AsyncMethodCallback<UriEndpointState>
    ) : Promise<UriEndpointState>;

    public stop(
        callback? : AsyncMethodCallback<UriEndpointState>
    ) : Promise<UriEndpointState>;

    public getState(
        callback? : AsyncMethodCallback<UriEndpointState>
    ) : Promise<UriEndpointState>;

    public getUri(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;
}

export declare interface UriEndpointEventHandlerMap extends EndpointEventHandlerMap
{
    "UriEndpointStateChanged" : (
        e : UriEndpointStateChanged
    ) => void;
}

export declare interface UriEndpointStateChanged extends RaiseBase
{
    state : UriEndpointState;
}

export declare const enum UriEndpointState
{
    STOP = "STOP",

    START = "START",

    PAUSE = "PAUSE",
}