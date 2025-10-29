/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for the exposed /api/web_experiments endpoint, to be used in posthog-js and for headless APIs.
 */
export type WebExperimentsAPI = {
    readonly id: number;
    name: string;
    created_at?: string;
    readonly feature_flag_key: string;
    /**
     * Variants for the web experiment. Example:
     *
     * {
         * "control": {
             * "transforms": [
                 * {
                     * "text": "Here comes Superman!",
                     * "html": "",
                     * "selector": "#page > #body > .header h1"
                     * }
                     * ],
                     * "conditions": "None",
                     * "rollout_percentage": 50
                     * },
                     * }
                     */
                    variants: any;
                };

