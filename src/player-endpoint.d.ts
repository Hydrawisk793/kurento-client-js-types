import { AsyncMethodCallback } from "./async-method-callback";
import { RaiseBase } from "./raise-base";
import { UriEndpoint, UriEndpointEventHandlerMap } from "./uri-endpoint";
import { VideoInfo } from "./video-info";

export declare class PlayerEndpoint extends UriEndpoint
{
    public static readonly constructorParams : {
        mediaPipeline : {
            type : "kurento.MediaPipeline";

            required : true;
        };

        uri : {
            type : "String";

            required : true;
        };

        useEncodedMedia : {
            type : "int";

            required : false;
        };

        networkCache : {
            type : "boolean";

            required : false;
        };
    };

    public constructor();

    public on<K extends keyof PlayerEndpointEventHandlerMap>(
        event : K,
        callback : PlayerEndpointEventHandlerMap[K]
    ) : this;

    public once<K extends keyof PlayerEndpointEventHandlerMap>(
        event : K,
        callback : PlayerEndpointEventHandlerMap[K]
    ) : this;

    public off<K extends keyof PlayerEndpointEventHandlerMap>(
        event : K,
        callback : PlayerEndpointEventHandlerMap[K]
    ) : this;

    public addListener<K extends keyof PlayerEndpointEventHandlerMap>(
        event : K,
        callback : PlayerEndpointEventHandlerMap[K]
    ) : this;

    public removeListener<K extends keyof PlayerEndpointEventHandlerMap>(
        event : K,
        callback : PlayerEndpointEventHandlerMap[K]
    ) : this;

    public removeAllListeners<K extends keyof PlayerEndpointEventHandlerMap>(
        event : K
    ) : this;

    public play(
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getElementGstreamerDot(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public getVideoInfo(
        callback? : AsyncMethodCallback<VideoInfo>
    ) : Promise<VideoInfo>;

    public getPosition(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;

    public setPosition(
        position : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;
}

export declare interface PlayerEndpointEventHandlerMap extends UriEndpointEventHandlerMap
{
    "EndOfStream" : (
        e : EndOfStream
    ) => void;
}

export declare interface EndOfStream extends RaiseBase
{

}
