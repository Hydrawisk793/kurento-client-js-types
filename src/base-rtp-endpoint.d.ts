import { SdpEndpoint } from "./sdp-endpoint";
import { SessionEndpointEventHandlerMap } from "./session-endpoint";
import { AsyncMethodCallback } from "./async-method-callback";
import { RembParams } from "./remb-params";

export declare abstract class BaseRtpEndpoint extends SdpEndpoint
{
    public constructor();

    public on<K extends keyof BaseRtpEndpointEventHandlerMap>(
        event : K,
        callback : BaseRtpEndpointEventHandlerMap[K]
    ) : this;

    public once<K extends keyof BaseRtpEndpointEventHandlerMap>(
        event : K,
        callback : BaseRtpEndpointEventHandlerMap[K]
    ) : this;

    public off<K extends keyof BaseRtpEndpointEventHandlerMap>(
        event : K,
        callback : BaseRtpEndpointEventHandlerMap[K]
    ) : this;

    public addListener<K extends keyof BaseRtpEndpointEventHandlerMap>(
        event : K,
        callback : BaseRtpEndpointEventHandlerMap[K]
    ) : this;

    public removeListener<K extends keyof BaseRtpEndpointEventHandlerMap>(
        event : K,
        callback : BaseRtpEndpointEventHandlerMap[K]
    ) : this;

    public removeAllListeners<K extends keyof BaseRtpEndpointEventHandlerMap>(
        event : K
    ) : this;

    public getConnectionState(
        callback? : AsyncMethodCallback<any>
    ) : Promise<any>;

    public setMinVideoRecvBandwidth(
        value : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getMinVideoRecvBandwidth(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;

    public setMinVideoSendBandwidth(
        value : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getMinVideoSendBandwidth(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;

    public setMaxVideoSendBandwidth(
        value : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getMaxVideoSendBandwidth(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;

    public getMtu(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;

    public setMtu(
        mtu : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getRembParams(
        callback? : AsyncMethodCallback<RembParams>
    ) : Promise<RembParams>;

    public setRembParams(
        rembParams : RembParams,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;
}

interface BaseRtpEndpointEventHandlerMap extends SessionEndpointEventHandlerMap
{
    "ConnectionStateChanged" : (
        e : any
    ) => void;

    "MediaStateChanged" : (
        e : any
    ) => void;
}
