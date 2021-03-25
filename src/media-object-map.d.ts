import { ServerManager } from "./server-manager";
import { MediaPipeline } from "./media-object";
import { HubPort } from "./hub-port";
import { Dispatcher } from "./dispatcher";
import { DispatcherOneToMany } from "./dispatcher-one-to-many";
import { WebRtcEndpoint } from "./web-rtc-endpoint";
import { PlayerEndpoint } from "./player-endpoint";
import { RecorderEndpoint } from "./recorder-endpoint";

export declare interface MediaObjectMap
{
    "ServerManager" : ServerManager;

    "MediaPipeline" : MediaPipeline;

    "HubPort" : HubPort;

    "Dispatcher" : Dispatcher;

    "DispatcherOneToMany" : DispatcherOneToMany;

    "WebRtcEndpoint" : WebRtcEndpoint;

    "PlayerEndpoint" : PlayerEndpoint;

    "RecorderEndpoint" : RecorderEndpoint;
}
