import { ComplexType } from "./complex-type";
import { ModuleInfo } from "./module-info";

export declare class ServerInfo extends ComplexType
{
    public constructor();

    public version : string;

    public modules : ModuleInfo[];

    public type : ServerType;

    public capabilities : string[];
}

export declare const enum ServerType
{
    KMS = "KMS",

    KCS = "KCS",
}
