import { SessionEndpoint, SessionEndpointEventHandlerMap } from "./session-endpoint";
import { AsyncMethodCallback } from "./async-method-callback";

export declare abstract class SdpEndpoint extends SessionEndpoint
{
    public constructor();

    public on<K extends keyof SessionEndpointEventHandlerMap>(
        event : K,
        callback : SessionEndpointEventHandlerMap[K]
    ) : this;

    public once<K extends keyof SessionEndpointEventHandlerMap>(
        event : K,
        callback : SessionEndpointEventHandlerMap[K]
    ) : this;

    public off<K extends keyof SessionEndpointEventHandlerMap>(
        event : K,
        callback : SessionEndpointEventHandlerMap[K]
    ) : this;

    public addListener<K extends keyof SessionEndpointEventHandlerMap>(
        event : K,
        callback : SessionEndpointEventHandlerMap[K]
    ) : this;

    public removeListener<K extends keyof SessionEndpointEventHandlerMap>(
        event : K,
        callback : SessionEndpointEventHandlerMap[K]
    ) : this;

    public removeAllListeners<K extends keyof SessionEndpointEventHandlerMap>(
        event : K
    ) : this;

    public generateOffer(
        callback? : AsyncMethodCallback<any>
    ) : Promise<any>;

    public getLocalSessionDescriptor(
        callback? : AsyncMethodCallback<string | null>
    ) : Promise<string | null>;

    public getRemoteSessionDescriptor(
        callback? : AsyncMethodCallback<string | null>
    ) : Promise<string | null>;

    public processAnswer(
        answer : string,
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public processOffer(
        offer : string,
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public setMaxAudioRecvBandwidth(
        value : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getMaxAudioRecvBandwidth(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;

    public setMaxVideoRecvBandwidth(
        value : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getMaxVideoRecvBandwidth(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;
}
