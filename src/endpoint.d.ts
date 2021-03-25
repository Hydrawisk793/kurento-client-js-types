import { MediaElement, MediaElementEventHandlerMap } from "./media-element";

export declare abstract class Endpoint extends MediaElement
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

export declare interface EndpointEventHandlerMap extends MediaElementEventHandlerMap
{

}
