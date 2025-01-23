import { BaseProjectOptions } from '../project';
/**
 * Utility for shared options.
 */
export declare class BaseOptions {
    /**
     * Merges shared defaults with provided options.
     * @param options Specific project options to merge.
     * @returns Merged options.
     */
    static sharedOptions<T extends BaseProjectOptions>(options: T): T;
}
