import { MediaObject } from "./media-object";
import { Tag } from "./tag";

export declare interface RaiseBase
{
    source : MediaObject;

    timestampMillis : string;

    tags : Tag[];
}
