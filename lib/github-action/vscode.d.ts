import { VsCodeBase, TypeScriptProjectBase } from '../base';
/**
 * VsCode builder implementing all relevant configuration for the project.
 */
export declare class VsCode extends VsCodeBase {
    /**
     * Initializes the VsCode builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure VsCode Package for.
     */
    constructor(project: TypeScriptProjectBase);
}
