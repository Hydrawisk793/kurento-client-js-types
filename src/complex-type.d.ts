export declare class ComplexType
{
    public constructor();

    public toJSON() : Omit<
        this,
        { [K in keyof this] : (this[K] extends Function ? K : never) }[keyof this]
    >;
}
