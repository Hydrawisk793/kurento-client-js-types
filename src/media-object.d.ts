import { EventEmitter } from "events";

import { Error } from "./error";
import { AsyncMethodCallback } from "./async-method-callback";
import { Tag } from "./tag";
import { MediaObjectMap } from "./media-object-map";

export declare abstract class MediaObject extends EventEmitter
{
    public static readonly constructorParams : Record<string, any>;

    public static readonly events : string[];

    public constructor();

    public on<K extends keyof MediaObjectEventHandlerMap>(
        event : K,
        callback : MediaObjectEventHandlerMap[K]
    ) : this;

    public once<K extends keyof MediaObjectEventHandlerMap>(
        event : K,
        callback : MediaObjectEventHandlerMap[K]
    ) : this;

    public off<K extends keyof MediaObjectEventHandlerMap>(
        event : K,
        callback : MediaObjectEventHandlerMap[K]
    ) : this;

    public addListener<K extends keyof MediaObjectEventHandlerMap>(
        event : K,
        callback : MediaObjectEventHandlerMap[K]
    ) : this;

    public removeListener<K extends keyof MediaObjectEventHandlerMap>(
        event : K,
        callback : MediaObjectEventHandlerMap[K]
    ) : this;

    public removeAllListeners<K extends keyof MediaObjectEventHandlerMap>(
        event : K
    ) : this;

    public release(
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public id : string;

    public name : string;

    public tags : Record<string, any>;

    public addTag(
        key : string,
        value : string,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getTag(
        key : string,
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public getTags(
        callback? : AsyncMethodCallback<Tag[]>
    ) : Promise<Tag[]>;

    public removeTag(
        key : string,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getChildren(
        callback? : AsyncMethodCallback<MediaObject[]>
    ) : Promise<MediaObject[]>;

    public getCreationTime(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;

    public getMediaPipeline(
        callback? : AsyncMethodCallback<MediaPipeline>
    ) : Promise<MediaPipeline>;

    public getParent(
        callback? : AsyncMethodCallback<MediaObject>
    ) : Promise<MediaObject>;

    public getName(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public setName(
        name : string,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;
}

export declare interface MediaObjectEventHandlerMap
{
    "Error" : (
        e : Error
    ) => void;
}

export declare class MediaPipeline extends MediaObject
{
    public constructor();

    public getGstreamerDot(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public create<T extends keyof MediaObjectMap>(
        type : T,
        callback? : AsyncMethodCallback<MediaObjectMap[T]>
    ) : Promise<MediaObjectMap[T]>;

    public create<T extends keyof MediaObjectMap>(
        type : T,
        params : Record<string, any>,
        callback? : AsyncMethodCallback<MediaObjectMap[T]>
    ) : Promise<MediaObjectMap[T]>;

    public getLatencyStats(
        callback? : AsyncMethodCallback<boolean>
    ) : Promise<boolean>;

    public setLatencyStats(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;
}
