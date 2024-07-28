/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelPathType } from './FunnelPathType';
import type { FunnelsQuery } from './FunnelsQuery';
export type FunnelPathsFilter = {
    funnelPathType?: (FunnelPathType | null);
    funnelSource: FunnelsQuery;
    funnelStep?: (number | null);
};

