import { AsyncMethodCallback } from "./async-method-callback";
import { HubPort } from "./hub-port";
import { MediaObject, MediaObjectEventHandlerMap } from "./media-object";

export declare abstract class Hub extends MediaObject
{
    public constructor();

    public getGstreamerDot(
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public getGstreamerDot(
        details : GstreamerDotDetails,
        callback? : AsyncMethodCallback<string>
    ) : Promise<string>;

    public createHubPort(
        callback? : AsyncMethodCallback<HubPort>
    ) : Promise<HubPort>;
}

export declare interface HubEventHandlerMap extends MediaObjectEventHandlerMap
{

}

export declare const enum GstreamerDotDetails
{
    SHOW_MEDIA_TYPE = "SHOW_MEDIA_TYPE",

    SHOW_CAPS_DETAILS = "SHOW_CAPS_DETAILS",

    SHOW_NON_DEFAULT_PARAMS = "SHOW_NON_DEFAULT_PARAMS",

    SHOW_STATES = "SHOW_STATES",

    SHOW_FULL_PARAMS = "SHOW_FULL_PARAMS",

    SHOW_ALL = "SHOW_ALL",

    SHOW_VERBOSE = "SHOW_VERBOSE",
}
