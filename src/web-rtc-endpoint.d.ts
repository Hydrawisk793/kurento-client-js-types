import { AsyncMethodCallback } from "./async-method-callback";
import { BaseRtpEndpoint, BaseRtpEndpointEventHandlerMap } from "./base-rtp-endpoint";
import { IceCandidate } from "./ice-candidate";
import { IceCandidatePair } from "./ice-candidate-pair";
import { IceConnection } from "./ice-connection";

export declare class WebRtcEndpoint extends BaseRtpEndpoint
{
    public constructor();

    public on<K extends keyof WebRtcEndpointEventHandlerMap>(
        event : K,
        callback : WebRtcEndpointEventHandlerMap[K]
    ) : this;

    public once<K extends keyof WebRtcEndpointEventHandlerMap>(
        event : K,
        callback : WebRtcEndpointEventHandlerMap[K]
    ) : this;

    public off<K extends keyof WebRtcEndpointEventHandlerMap>(
        event : K,
        callback : WebRtcEndpointEventHandlerMap[K]
    ) : this;

    public addListener<K extends keyof WebRtcEndpointEventHandlerMap>(
        event : K,
        callback : WebRtcEndpointEventHandlerMap[K]
    ) : this;

    public removeListener<K extends keyof WebRtcEndpointEventHandlerMap>(
        event : K,
        callback : WebRtcEndpointEventHandlerMap[K]
    ) : this;

    public removeAllListeners<K extends keyof WebRtcEndpointEventHandlerMap>(
        event : K
    ) : this;

    public addIceCandidate(
        candidate : IceCandidate,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public createDataChannel(
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public createDataChannel(
        label : string,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public createDataChannel(
        label : string,
        ordered : boolean,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public createDataChannel(
        label : string,
        ordered : boolean,
        maxPacketLifeTime : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public createDataChannel(
        label : string,
        ordered : boolean,
        maxPacketLifeTime : number,
        maxRetransmits : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public createDataChannel(
        label : string,
        ordered : boolean,
        maxPacketLifeTime : number,
        maxRetransmits : number,
        protocol : string,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public closeDataChannel(
        channelId : number, 
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public gatherCandidates(
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getExternalAddress(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public setExternalAddress(
        externalAddress : string,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getICECandidatePairs(
        callback? : AsyncMethodCallback<IceCandidatePair[]>
    ) : Promise<IceCandidatePair[]>;

    public getIceConnectionState(
        callback? : AsyncMethodCallback<IceConnection>
    ) : Promise<IceConnection>;

    public getMediaState(
        callback? : AsyncMethodCallback<any>
    ) : Promise<any>;

    public getNetworkInterfaces(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public setNetworkInterfaces(
        networkInterfaces : string,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public setStunServerAddress(
        server : string,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getStunServerAddress(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public setStunServerPort(
        port : number,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getStunServerPort(
        callback? : AsyncMethodCallback<number>
    ) : Promise<number>;

    public setTurnUrl(
        url : string,
        callback? : AsyncMethodCallback<void>
    ) : Promise<void>;

    public getTurnUrl(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;
}

export declare interface WebRtcEndpointEventHandlerMap extends BaseRtpEndpointEventHandlerMap
{
    "DataChannelClose" : (
        e : any
    ) => void;

    "DataChannelOpen" : (
        e : any
    ) => void;

    "IceCandidateFound" : (
        e : any
    ) => void;

    "IceComponentStateChange" : (
        e : any
    ) => void;

    "IceGatheringDone" : (
        e : any
    ) => void;

    "NewCandidatePairSelected" : (
        e : any
    ) => void;

    "OnDataChannelClosed" : (
        e : any
    ) => void;

    "OnDataChannelOpened" : (
        e : any
    ) => void;

    "OnIceCandidate" : (
        e : IceCandidate
    ) => void;

    "OnIceComponentStateChanged" : (
        e : any
    ) => void;

    "OnIceGatheringDone" : (
        e : any
    ) => void;
}
