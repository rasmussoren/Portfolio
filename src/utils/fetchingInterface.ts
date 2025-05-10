export interface FetchingState<T> {
    items: T[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
