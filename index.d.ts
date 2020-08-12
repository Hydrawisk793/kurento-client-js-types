// Type definitions for kurento-client 6.14.0
// Project: https://github.com/Kurento/kurento-client-js
// Definitions by: Hydrawisk793 <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from "events";

declare namespace KurentoClientConstructor
{
    function getSingleton(
        ws_uri: string,
        callback? : AsyncMethodCallback<KurentoClient>
    ) : Promise<KurentoClient>;

    function getSingleton(
        ws_uri: string,
        options : KurentoClientDict,
        callback? : AsyncMethodCallback<KurentoClient>
    ) : Promise<KurentoClient>;

    function getComplexType<K extends keyof ComplexTypeMap>(
        complex : K
    ) : (new (...args : any[]) => ComplexTypeMap[K]);

    interface KurentoClientDict
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

    interface KurentoClientEventHandlerMap
    {
        "connected" : () => void;

        "connectionFailed" : () => void;

        "disconnected" : () => void;
    }

    class KurentoClient extends EventEmitter
    {
        public on<K extends keyof KurentoClientEventHandlerMap>(
            event : K,
            callback : KurentoClientEventHandlerMap[K]
        ) : this;

        public once<K extends keyof KurentoClientEventHandlerMap>(
            event : K,
            callback : KurentoClientEventHandlerMap[K]
        ) : this;

        public off<K extends keyof KurentoClientEventHandlerMap>(
            event : K,
            callback : KurentoClientEventHandlerMap[K]
        ) : this;

        public addListener<K extends keyof KurentoClientEventHandlerMap>(
            event : K,
            callback : KurentoClientEventHandlerMap[K]
        ) : this;

        public removeListener<K extends keyof KurentoClientEventHandlerMap>(
            event : K,
            callback : KurentoClientEventHandlerMap[K]
        ) : this;

        public removeAllListeners<K extends keyof KurentoClientEventHandlerMap>(
            event : K
        ) : this;

        public close() : void;

        public create<T extends keyof MediaObjectMap>(
            type : T,
            callback? : AsyncMethodCallback<MediaObjectMap[T]>
        ) : Promise<MediaObjectMap[T]>;

        public create<T extends keyof MediaObjectMap>(
            type : T,
            params : any,
            callback? : AsyncMethodCallback<MediaObjectMap[T]>
        ) : Promise<MediaObjectMap[T]>;

        public getMediaobjectById(
            objectId : string
        ) : Promise<any>;

        public getServerManager(
            callback? : AsyncMethodCallback<ServerManager>
        ) : Promise<ServerManager>;
    }

    interface MediaObjectMap
    {
        "ServerManager" : ServerManager;

        "MediaPipeline" : MediaPipeline;

        "WebRtcEndpoint" : WebRtcEndpoint;

        "PlayerEndpoint" : PlayerEndpoint;

        "RecorderEndpoint" : RecorderEndpoint;
    }

    interface MediaObjectEventHandlerMap
    {
        "Error" : (
            e : Error
        ) => void;
    }

    abstract class MediaObject extends EventEmitter
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

    interface ServerManagerEventHandlerMap extends MediaObjectEventHandlerMap
    {
        "ObjectCreated" : (
            e : Error
        ) => void;

        "ObjectDestroyed" : (
            e : Error
        ) => void;
    }

    class ServerManager extends MediaObject
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

    class MediaPipeline extends MediaObject
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
            params : any,
            callback? : AsyncMethodCallback<MediaObjectMap[T]>
        ) : Promise<MediaObjectMap[T]>;

        public getLatencyStats(
            callback? : AsyncMethodCallback<boolean>
        ) : Promise<boolean>;

        public setLatencyStats(
            callback? : AsyncMethodCallback<string>
        ) : Promise<string>;
    }

    interface MediaElementEventHandlerMap extends MediaObjectEventHandlerMap
    {
        "ElementConnected" : (
            e : any
        ) => void;

        "ElementDisconnected" : (
            e : any
        ) => void;

        "MediaFlowInStateChange" : (
            e : any
        ) => void;

        "MediaFlowOutStateChange" : (
            e : any
        ) => void;

        "MediaTranscodingStateChange" : (
            e : any
        ) => void;
    }

    abstract class MediaElement extends MediaObject
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

    interface EndpointEventHandlerMap extends MediaElementEventHandlerMap
    {

    }

    abstract class Endpoint extends MediaElement
    {
        public constructor();

        public on<K extends keyof EndpointEventHandlerMap>(
            event : K,
            callback : EndpointEventHandlerMap[K]
        ) : this;

        public once<K extends keyof EndpointEventHandlerMap>(
            event : K,
            callback : EndpointEventHandlerMap[K]
        ) : this;

        public off<K extends keyof EndpointEventHandlerMap>(
            event : K,
            callback : EndpointEventHandlerMap[K]
        ) : this;

        public addListener<K extends keyof EndpointEventHandlerMap>(
            event : K,
            callback : EndpointEventHandlerMap[K]
        ) : this;

        public removeListener<K extends keyof EndpointEventHandlerMap>(
            event : K,
            callback : EndpointEventHandlerMap[K]
        ) : this;

        public removeAllListeners<K extends keyof EndpointEventHandlerMap>(
            event : K
        ) : this;
    }

    interface SessionEndpointEventHandlerMap extends EndpointEventHandlerMap
    {
        "MediaSessionStarted" : (
            e : any
        ) => void;

        "MediaSessionTerminated" : (
            e : any
        ) => void;
    }

    abstract class SessionEndpoint extends Endpoint
    {
        public constructor();
    }

    abstract class SdpEndpoint extends SessionEndpoint
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

    interface BaseRtpEndpointEventHandlerMap extends SessionEndpointEventHandlerMap
    {
        "ConnectionStateChanged" : (
            e : any
        ) => void;

        "MediaStateChanged" : (
            e : any
        ) => void;
    }

    abstract class BaseRtpEndpoint extends SdpEndpoint
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

    interface WebRtcEndpointEventHandlerMap extends BaseRtpEndpointEventHandlerMap
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

    class WebRtcEndpoint extends BaseRtpEndpoint
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

        public create(
            type : "WebRtcEndpoint"
        ) : Promise<WebRtcEndpoint>;

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

    interface UriEndpointEventHandlerMap extends EndpointEventHandlerMap
    {
        "UriEndpointStateChanged" : (
            e : any
        ) => void;
    }

    abstract class UriEndpoint extends Endpoint
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

    interface PlayerEndpointEventHandlerMap extends UriEndpointEventHandlerMap
    {
        "EndOfStream" : (e : any) => void;
    }

    class PlayerEndpoint extends UriEndpoint
    {
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

    interface RecorderEndpointEventHandlerMap extends UriEndpointEventHandlerMap
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

    class RecorderEndpoint extends UriEndpoint
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

    interface ComplexTypeMap
    {
        "ServerInfo" : ServerInfo;

        "ModuleInfo" : ModuleInfo;

        "Tag" : Tag;

        "ElementConnectionData" : ElementConnectionData;

        "Fraction" : Fraction;

        "VideoCaps" : VideoCaps;

        "RembParams" : RembParams;

        "VideoInfo" : VideoInfo;

        "IceConnection" : IceConnection;

        "IceCandidate" : IceCandidate;

        "IceCandidatePair" : IceCandidatePair;
    }

    class ComplexType
    {
        public constructor();

        public toJSON() : Omit<
            this,
            { [K in keyof this] : (this[K] extends Function ? K : never) }[keyof this]
        >;
    }

    class ServerInfo extends ComplexType
    {
        public constructor();

        public version : string;

        public modules : ModuleInfo[];

        public type : ServerType;

        public capabilities : string[];
    }

    class ModuleInfo extends ComplexType
    {
        version : string;

        name : string;

        generationTime : string;

        factories : string[];
    }

    class Tag extends ComplexType
    {
        public constructor();

        public key : string;

        public value : string;
    }

    class ElementConnectionData extends ComplexType
    {
        public constructor();

        public source : MediaElement;

        public sink : MediaElement;

        public type : MediaType;

        public sourceDescription : string;

        public sinkDescription : string;
    }

    class Fraction extends ComplexType
    {
        public constructor();

        public numerator : number;

        public denominator : number;
    }

    class VideoCaps extends ComplexType
    {
        public constructor();

        public codec : VideoCodec;

        public framerate : Fraction;
    }

    class RembParams extends ComplexType
    {
        public constructor();

        public packetsRecvIntervalTop : number;

        public exponentialFactor : number;

        public linealFactorMin : number;

        public linealFactorGrade : number;

        public decrementFactor : number;

        public thresholdFactor : number;

        public upLosses : number;

        public rembOnConnect : number;
    }

    class VideoInfo extends ComplexType
    {
        public constructor();

        public isSeekable : number;

        public seekableInit : number;

        public seekableEnd : number;

        public duration : number;
    }

    class IceConnection extends ComplexType
    {
        public constructor();

        public streamId : string;

        public componentId : number;

        public state : IceComponentState;
    }

    class IceCandidate extends ComplexType
    {
        public constructor();

        public candidate : string;

        public sdpMid : string;

        public sdpMLineIndex : number;
    }

    class IceCandidatePair extends ComplexType
    {
        public constructor();

        public streamID : string;

        public componentID : number;

        public localCandidate : number;

        public remoteCandidate : number;
    }

    const enum ServerType
    {
        KMS = "KMS",

        KCS = "KCS",
    }

    const enum MediaType
    {
        AUDIO = "AUDIO",

        DATA = "DATA",

        VIDEO = "VIDEO",
    }

    const enum VideoCodec
    {
        VP8 = "VP8",

        H264 = "H264",

        RAW = "RAW",
    }

    const enum UriEndpointState
    {
        STOP = "STOP",

        START = "START",

        PAUSE = "PAUSE",
    }

    const enum IceComponentState
    {
        DISCONNECTED = "DISCONNECTED",

        GATHERING = "GATHERING",

        CONNECTING = "CONNECTING",

        CONNECTED = "CONNECTED",

        READY = "READY",

        FAILED = "FAILED",
    }

    interface RaiseBase
    {
        source : MediaObject;

        timestampMillis : string;

        tags : Tag[];
    }

    interface Error extends RaiseBase
    {
        type : string;

        description : string;

        errorCode : number;
    }

    type AsyncMethodCallback<T> = (
        error : Error,
        result : T
    ) => void;
}

declare function KurentoClientConstructor(
    ws_uri: string,
    callback? : KurentoClientConstructor.AsyncMethodCallback<KurentoClientConstructor.KurentoClient>
) : Promise<KurentoClientConstructor.KurentoClient>;

declare function KurentoClientConstructor(
    ws_uri: string,
    options : KurentoClientConstructor.KurentoClientDict,
    callback? : KurentoClientConstructor.AsyncMethodCallback<KurentoClientConstructor.KurentoClient>
) : Promise<KurentoClientConstructor.KurentoClient>;

export = KurentoClientConstructor;
