/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedProxyRecordList } from '../models/PaginatedProxyRecordList';
import type { PatchedProxyRecord } from '../models/PatchedProxyRecord';
import type { ProxyRecord } from '../models/ProxyRecord';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProxyRecordsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedProxyRecordList
     * @throws ApiError
     */
    public proxyRecordsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedProxyRecordList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/proxy_records/',
            path: {
                'organization_id': organizationId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param organizationId
     * @param requestBody
     * @returns ProxyRecord
     * @throws ApiError
     */
    public proxyRecordsCreate(
        organizationId: string,
        requestBody: ProxyRecord,
    ): CancelablePromise<ProxyRecord> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/proxy_records/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param organizationId
     * @returns ProxyRecord
     * @throws ApiError
     */
    public proxyRecordsRetrieve(
        id: string,
        organizationId: string,
    ): CancelablePromise<ProxyRecord> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/proxy_records/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id
     * @param organizationId
     * @param requestBody
     * @returns ProxyRecord
     * @throws ApiError
     */
    public proxyRecordsUpdate(
        id: string,
        organizationId: string,
        requestBody: ProxyRecord,
    ): CancelablePromise<ProxyRecord> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/proxy_records/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param organizationId
     * @param requestBody
     * @returns ProxyRecord
     * @throws ApiError
     */
    public proxyRecordsPartialUpdate(
        id: string,
        organizationId: string,
        requestBody?: PatchedProxyRecord,
    ): CancelablePromise<ProxyRecord> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/proxy_records/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public proxyRecordsDestroy(
        id: string,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/proxy_records/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
}
