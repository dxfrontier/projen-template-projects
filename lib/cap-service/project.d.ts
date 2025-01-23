import { BaseProjectOptions, BaseProject } from '../base';
export interface CapServiceProjectOptions extends BaseProjectOptions {
    readonly namespace?: string;
    readonly entityName?: string;
}
/**
 * Base class for managing project CapService configuration.
 */
export declare class CapServiceProject extends BaseProject {
    /**
     * Initializes the project.
     * @param options Additional project options.
     */
    constructor(options: CapServiceProjectOptions);
    protected initializeBaseConfigs(options: BaseProjectOptions): void;
    postSynthesize(): void;
}
