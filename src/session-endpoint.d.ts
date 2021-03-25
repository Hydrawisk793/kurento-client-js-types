import { Endpoint, EndpointEventHandlerMap } from "./endpoint";

export declare abstract class SessionEndpoint extends Endpoint
{
    public constructor();
}

export declare interface SessionEndpointEventHandlerMap extends EndpointEventHandlerMap
{
    "MediaSessionStarted" : (
        e : any
    ) => void;

    "MediaSessionTerminated" : (
        e : any
    ) => void;
}
