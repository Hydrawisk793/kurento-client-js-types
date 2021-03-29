import { EventEmitter } from "events";

import { AsyncMethodCallback } from "./async-method-callback";
import { ServerManager } from "./server-manager";
import { MediaObjectMap } from "./media-object-map";
import { ComplexTypeMap } from "./complex-type-map";

export declare interface KurentoClient extends EventEmitter
{
    on<K extends keyof KurentoClientEventHandlerMap>(
        event : K,
        callback : KurentoClientEventHandlerMap[K]
    ) : this;

    once<K extends keyof KurentoClientEventHandlerMap>(
        event : K,
        callback : KurentoClientEventHandlerMap[K]
    ) : this;

    off<K extends keyof KurentoClientEventHandlerMap>(
        event : K,
        callback : KurentoClientEventHandlerMap[K]
    ) : this;

    addListener<K extends keyof KurentoClientEventHandlerMap>(
        event : K,
        callback : KurentoClientEventHandlerMap[K]
    ) : this;

    removeListener<K extends keyof KurentoClientEventHandlerMap>(
        event : K,
        callback : KurentoClientEventHandlerMap[K]
    ) : this;

    removeAllListeners<K extends keyof KurentoClientEventHandlerMap>(
        event : K
    ) : this;

    close() : void;

    create<T extends keyof MediaObjectMap>(
        type : T,
        callback? : AsyncMethodCallback<MediaObjectMap[T]>
    ) : Promise<MediaObjectMap[T]>;

    create<T extends keyof MediaObjectMap>(
        type : T,
        params : Record<string, any>,
        callback? : AsyncMethodCallback<MediaObjectMap[T]>
    ) : Promise<MediaObjectMap[T]>;

    getMediaobjectById(
        objectId : string
    ) : Promise<any>;

    getServerManager(
        callback? : AsyncMethodCallback<ServerManager>
    ) : Promise<ServerManager>;
}

export declare interface KurentoClientConstructor
{
    (
        ...args : (
            [
                ws_uri : string,
            ]
            | 
            [
                ws_uri : string,
                callback : AsyncMethodCallback<KurentoClient>
            ]
            | [
                ws_uri : string,
                options : KurentoClientDict,
            ]
            | [
                ws_uri : string,
                options : KurentoClientDict,
                callback : AsyncMethodCallback<KurentoClient>
            ]
        )
    ) : Promise<KurentoClient>;

    getSingleton(
        ws_uri: string,
        callback? : AsyncMethodCallback<KurentoClient>
    ) : Promise<KurentoClient>;

    getSingleton(
        ws_uri: string,
        options : KurentoClientDict,
        callback? : AsyncMethodCallback<KurentoClient>
    ) : Promise<KurentoClient>;

    getComplexType<K extends keyof ComplexTypeMap>(
        complex : K
    ) : (new (...args : any[]) => ComplexTypeMap[K]);

    prototype : KurentoClient;
}

export declare const KurentoClient : KurentoClientConstructor;

export declare interface KurentoClientEventHandlerMap
{
    "connected" : () => void;

    "connectionFailed" : () => void;

    "disconnected" : () => void;
}

export declare interface KurentoClientDict
{
    failAfter? : number;

    enableTransactions? : boolean;

    strict? : boolean;

    access_token? : string;

    max_retries? : number;

    request_timeout? : number;

    response_timeout? : number;

    duplicates_timeout? : number;

    socket? : any;
}
