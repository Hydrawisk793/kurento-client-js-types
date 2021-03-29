// Type definitions for kurento-client 6.14.0
// Project: https://github.com/Kurento/kurento-client-js
// Definitions by: Hydrawisk793 <https://github.com/Hydrawisk793/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as _kurento from "./kurento";

declare namespace kurento
{
    export import Error = _kurento.Error;
    export import AsyncMethodCallback = _kurento.AsyncMethodCallback;

    export import ComplexType = _kurento.ComplexType;
    export import ServerInfo = _kurento.ServerInfo;
    export import ServerType = _kurento.ServerType;
    export import ModuleInfo = _kurento.ModuleInfo;
    export import Tag = _kurento.Tag;
    export import ElementConnectionData = _kurento.ElementConnectionData;
    export import Fraction = _kurento.Fraction;
    export import VideoCaps = _kurento.VideoCaps;
    export import VideoCodec = _kurento.VideoCodec;
    export import RembParams = _kurento.RembParams;
    export import VideoInfo = _kurento.VideoInfo;
    export import IceConnection = _kurento.IceConnection;
    export import IceComponentState = _kurento.IceComponentState;
    export import IceCandidate = _kurento.IceCandidate;
    export import IceCandidatePair = _kurento.IceCandidatePair;
    export import ComplexTypeMap = _kurento.ComplexTypeMap;

    export import RaiseBase = _kurento.RaiseBase;
    export import MediaObject = _kurento.MediaObject;
    export import MediaObjectEventHandlerMap = _kurento.MediaObjectEventHandlerMap;
    export import MediaPipeline = _kurento.MediaPipeline;
    export import ServerManager = _kurento.ServerManager;
    export import ServerManagerEventHandlerMap = _kurento.ServerManagerEventHandlerMap;
    export import ObjectCreated = _kurento.ObjectCreated;
    export import ObjectDestroyed = _kurento.ObjectDestroyed;
    export import MediaElement = _kurento.MediaElement;
    export import MediaElementEventHandlerMap = _kurento.MediaElementEventHandlerMap;
    export import ElementConnected = _kurento.ElementConnected;
    export import ElementDisconnected = _kurento.ElementDisconnected;
    export import MediaType = _kurento.MediaType;
    export import Hub = _kurento.Hub;
    export import HubEventHandlerMap = _kurento.HubEventHandlerMap;
    export import GstreamerDotDetails = _kurento.GstreamerDotDetails;
    export import HubPort = _kurento.HubPort;
    export import HubPortEventHandlerMap = _kurento.HubPortEventHandlerMap;
    export import Composite = _kurento.Composite;
    export import CompositeEventMap = _kurento.CompositeEventMap;
    export import Dispatcher = _kurento.Dispatcher;
    export import DispatcherEventMap = _kurento.DispatcherEventMap;
    export import DispatcherOneToMany = _kurento.DispatcherOneToMany;
    export import DispatcherOneToManyEventMap = _kurento.DispatcherOneToManyEventMap;
    export import Endpoint = _kurento.Endpoint;
    export import EndpointEventHandlerMap = _kurento.EndpointEventHandlerMap;
    export import SessionEndpoint = _kurento.SessionEndpoint;
    export import SessionEndpointEventHandlerMap = _kurento.SessionEndpointEventHandlerMap;
    export import SdpEndpoint = _kurento.SdpEndpoint;
    export import BaseRtpEndpoint = _kurento.BaseRtpEndpoint;
    export import BaseRtpEndpointEventHandlerMap = _kurento.BaseRtpEndpointEventHandlerMap;
    export import WebRtcEndpoint = _kurento.WebRtcEndpoint;
    export import WebRtcEndpointEventHandlerMap = _kurento.WebRtcEndpointEventHandlerMap;
    export import UriEndpoint = _kurento.UriEndpoint;
    export import UriEndpointEventHandlerMap = _kurento.UriEndpointEventHandlerMap;
    export import UriEndpointStateChanged = _kurento.UriEndpointStateChanged;
    export import UriEndpointState = _kurento.UriEndpointState;
    export import PlayerEndpoint = _kurento.PlayerEndpoint;
    export import PlayerEndpointEventHandlerMap = _kurento.PlayerEndpointEventHandlerMap;
    export import EndOfStream = _kurento.EndOfStream;
    export import RecorderEndpoint = _kurento.RecorderEndpoint;
    export import RecorderEndpointEventHandlerMap = _kurento.RecorderEndpointEventHandlerMap;
    export import MediaObjectMap = _kurento.MediaObjectMap;

    export import KurentoClient = _kurento.KurentoClient;
    export import KurentoClientConstructor = _kurento.KurentoClientConstructor;
    export import KurentoClientEventHandlerMap = _kurento.KurentoClientEventHandlerMap;
    export import KurentoClientDict = _kurento.KurentoClientDict;
}

declare function kurento(
    ...args : Parameters<_kurento.KurentoClientConstructor>
) : ReturnType<_kurento.KurentoClientConstructor>;

export = kurento;
