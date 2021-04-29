import { AsyncMethodCallback } from "./async-method-callback";
import { ElementConnectionData } from "./element-connection-data";
import { MediaObject, MediaObjectEventHandlerMap } from "./media-object";
import { RaiseBase } from "./raise-base";
import { VideoCaps } from "./video-caps";

export declare abstract class MediaElement extends MediaObject
{
    public constructor();

    public on<K extends keyof MediaElementEventHandlerMap>(
        event : K,
        callback : MediaElementEventHandlerMap[K]
    ) : this;

    public once<K extends keyof MediaElementEventHandlerMap>(
        event : K,
        callback : MediaElementEventHandlerMap[K]
    ) : this;

    public off<K extends keyof MediaElementEventHandlerMap>(
        event : K,
        callback : MediaElementEventHandlerMap[K]
    ) : this;

    public addListener<K extends keyof MediaElementEventHandlerMap>(
        event : K,
        callback : MediaElementEventHandlerMap[K]
    ) : this;

    public removeListener<K extends keyof MediaElementEventHandlerMap>(
        event : K,
        callback : MediaElementEventHandlerMap[K]
    ) : this;

    public removeAllListeners<K extends keyof MediaElementEventHandlerMap>(
        event : K
    ) : this;

    public connect(
        sink : MediaElement,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public disconnect(
        sink : MediaElement,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getGstreamerDot(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public getSinkConnections(
        callback? : AsyncMethodCallback<ElementConnectionData[]>
    ) : Promise<ElementConnectionData[]>;

    public getSourceConnections(
        callback? : AsyncMethodCallback<ElementConnectionData[]>
    ) : Promise<ElementConnectionData[]>;

    public getStats(
        callback? : AsyncMethodCallback<any>
    ) : Promise<any>;

    public isMediaFlowingIn(
        mediaType : MediaType,
        callback? : AsyncMethodCallback<boolean>
    ) : Promise<boolean>;

    public isMediaFlowingIn(
        mediaType : MediaType,
        sinkMediaDescription : string,
        callback? : AsyncMethodCallback<boolean>
    ) : Promise<boolean>;

    public isMediaFlowingOut(
        mediaType : MediaType,
        callback? : AsyncMethodCallback<boolean>
    ) : Promise<boolean>;

    public isMediaFlowingOut(
        mediaType : MediaType,
        sourceMediaDescription : string,
        callback? : AsyncMethodCallback<boolean>
    ) : Promise<boolean>;

    public isMediaTranscoding(
        mediaType : MediaType,
        callback? : AsyncMethodCallback<boolean>
    ) : Promise<boolean>;

    public isMediaTranscoding(
        mediaType : MediaType,
        binName : string,
        callback? : AsyncMethodCallback<boolean>
    ) : Promise<boolean>;

    public setAudioFormat(
        caps : any,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public setOutputBitrate(
        bitrate : number,
        callback? : AsyncMethodCallback<any>
    ) : Promise<any>;

    public setVideoFormat(
        caps : VideoCaps,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public setMinOutputBitrate(
        value : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getMinOutputBitrate(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;

    public setMaxOutputBitrate(
        value : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getMaxOutputBitrate(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;
}

export declare interface MediaElementEventHandlerMap extends MediaObjectEventHandlerMap
{
    "ElementConnected" : (
        e : ElementConnected
    ) => void;

    "ElementDisconnected" : (
        e : ElementDisconnected
    ) => void;

    "MediaFlowInStateChange" : (
        e : MediaFlowInStateChange
    ) => void;

    "MediaFlowOutStateChange" : (
        e : MediaFlowOutStateChange
    ) => void;

    "MediaTranscodingStateChange" : (
        e : MediaTranscodingStateChange
    ) => void;
}

export interface ElementConnected extends RaiseBase
{
    sink : MediaElement;

    mediaType : MediaType;

    sourceMediaDescription : string;

    sinkMediaDescription : string;
}

export interface ElementDisconnected extends RaiseBase
{
    sink : MediaElement;

    mediaType : MediaType;

    sourceMediaDescription : string;

    sinkMediaDescription : string;
}

export interface MediaFlowInStateChange extends RaiseBase
{
    mediaType : MediaType;

    padName : string;

    state : MediaFlowState;
}

export interface MediaFlowOutStateChange extends RaiseBase
{
    mediaType : MediaType;

    padName : string;

    state : MediaFlowState;
}

export interface MediaTranscodingStateChange extends RaiseBase
{
    state : MediaTranscodingState;

    binName : string;

    mediaType : MediaType;
}

export declare const enum MediaType
{
    AUDIO = "AUDIO",

    DATA = "DATA",

    VIDEO = "VIDEO",
}

export declare const enum MediaFlowState
{
    FLOWING = "FLOWING",

    NOT_FLOWING = "NOT_FLOWING",
}

export declare const enum MediaTranscodingState
{
    TRANSCODING = "TRANSCODING",

    NOT_TRANSCODING = "NOT_TRANSCODING",
}
