import { AsyncMethodCallback } from "./async-method-callback";
import { MediaObject, MediaObjectEventHandlerMap, MediaPipeline } from "./media-object";
import { RaiseBase } from "./raise-base";
import { ServerInfo } from "./server-info";

export declare class ServerManager extends MediaObject
{
    public constructor();

    public on<K extends keyof ServerManagerEventHandlerMap>(
        event : K,
        callback : ServerManagerEventHandlerMap[K]
    ) : this;

    public once<K extends keyof ServerManagerEventHandlerMap>(
        event : K,
        callback : ServerManagerEventHandlerMap[K]
    ) : this;

    public off<K extends keyof ServerManagerEventHandlerMap>(
        event : K,
        callback : ServerManagerEventHandlerMap[K]
    ) : this;

    public addListener<K extends keyof ServerManagerEventHandlerMap>(
        event : K,
        callback : ServerManagerEventHandlerMap[K]
    ) : this;

    public removeListener<K extends keyof ServerManagerEventHandlerMap>(
        event : K,
        callback : ServerManagerEventHandlerMap[K]
    ) : this;

    public removeAllListeners<K extends keyof ServerManagerEventHandlerMap>(
        event : K
    ) : this;

    public getKmd(
        moduleName : string,
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public getUsedMemory(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;

    public getInfo(
        callback? : AsyncMethodCallback<ServerInfo>
    ) : Promise<ServerInfo>;

    public getMetadata(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public getPipelines(
        callback? : AsyncMethodCallback<MediaPipeline[]>
    ) : Promise<MediaPipeline[]>;

    public getSessions(
        callback? : AsyncMethodCallback<string[]>
    ) : Promise<string[]>;
}

export declare interface ServerManagerEventHandlerMap extends MediaObjectEventHandlerMap
{
    "ObjectCreated" : (
        e : ObjectCreated
    ) => void;

    "ObjectDestroyed" : (
        e : ObjectDestroyed
    ) => void;
}

export declare interface ObjectCreated extends RaiseBase
{
    object : string;
}

export declare interface ObjectDestroyed extends RaiseBase
{
    objectId : string;
}
