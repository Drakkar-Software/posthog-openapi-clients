/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { ExperimentEventExposureConfig } from './ExperimentEventExposureConfig';
import type { MultipleVariantHandling } from './MultipleVariantHandling';
export type ExperimentExposureCriteria = {
    exposure_config?: (ExperimentEventExposureConfig | ActionsNode) | null;
    filterTestAccounts?: boolean | null;
    multiple_variant_handling?: MultipleVariantHandling | null;
};

