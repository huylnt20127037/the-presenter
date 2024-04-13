const LoadState = {
     INITIAL: 0,
     LOADING: 1,
     LOADED: 2,
     ERROR: -1,
     isNotLoaded: (value) => value != LoadState.LOADED,
     isLoaded: (value) => value == LoadState.LOADED,
     isLoading: (value) => value == LoadState.LOADING
}
export default LoadState